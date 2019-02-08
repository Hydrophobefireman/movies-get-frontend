import { Requests } from "./httpService.js";
import { urlencode, loadHash } from "../router/routerUtils.js";
import { sanitizedName, getWebpifSupported, decodeHTML } from "../common.js";
import Component from "../router/component.js";
import { TextComponent } from "../router/utils.js";

const component = new Component("div", {}, [], {
  className: ["rec-box"]
});
export const searchMovies = async (q, updateChildren = true) => {
  const sanitized = (q || "").trim();
  if (!sanitized) {
    return [];
  } else {
    try {
      const __data = Requests.post("/api/data/search/", true, urlencode({ q }));
      if (updateChildren) {
        component.setDomAttrs({ style: { "pointer-events": "none" } });
        component.children.forEach(child => {
          child.setDomAttrs({ href: "" }, false);
          child.children[0].setDomAttrs(
            { style: { "background-image": "" } },
            false
          );
          child.children[1].setDomAttrs({ style: { display: "none" } }, false);
        });
        component.updateChildren();
      }
      const _data = await __data;
      const data = await _data.json();
      return data.movies || [];
    } catch (e) {
      return [];
    }
  }
};
function handleClick(e) {
  if (e.ctrlKey) {
    return;
  }
  e.preventDefault();
  return loadHash(
    `/watch?${urlencode({
      id: this.getState.id,
      movie: sanitizedName(this.getState.movieName)
    })}`
  );
}
export const generateComponents = async data => {
  const children = [];
  for (const dat of data) {
    const movieID = dat.id,
      movieName = decodeHTML(dat.movie),
      url = `/watch?${urlencode({
        id: movieID,
        movie: sanitizedName(movieName)
      })}`,
      $$url = await getWebpifSupported(dat.thumb),
      img = new Component("div", {}, [], {
        style: { "background-image": `url(${$$url})` },
        className: "rec-image"
      });
    const wrapComponentChildren = [
      img,
      new Component("span", {}, [new TextComponent(movieName, movieID)], {
        className: "rec-title"
      })
    ];
    const props = { id: movieID, movieName };
    const domProps = {
      className: "rec-wrapper",
      href: `#${url}`
    };
    const wrapComponent = new Component(
      "a",
      props,
      wrapComponentChildren,
      domProps
    );
    wrapComponent.attachEventListener("click", handleClick.bind(wrapComponent));
    children.push(wrapComponent);
  }
  return children;
};
const updateChildrenEQLength = async (_resp, childComponents) => {
  childComponents.forEach((child, i) => {
    const resp = _resp[i];
    const img = child.children[0];
    const a = child;
    const prevID = child.getState.id;
    const span = child.children[1];
    span.setDomAttrs({ style: { display: "" } }, false);
    const textComponent = TextComponent.find(prevID, span.$element)[0];
    const movieID = resp.id,
      movieName = resp.movie;
    a.setDomAttrs({ style: { display: "" } }, false);
    const $$url = getWebpifSupported(resp.thumb);
    img.setDomAttrs({ style: { "background-image": `url(${$$url})` } }, false);
    if (prevID === movieID) {
      return;
    }
    const url = `/watch?${urlencode({ id: movieID, movie: movieName })}`;
    a.setDomAttrs({ href: `#${url}` }, false);
    a.setState({ id: movieID, movieName }, false);
    textComponent.data = movieName;
    textComponent.tag = movieID;
    // debugger;
    // child.update();
  });
};

export const createResponseComponentsSync = () => {
  component.destroyChildComponents(false, true);
  return component;
};
export const createResponseComponents = async data => {
  const newLength = (data || []).length;
  component.setDomAttrs({ style: { "pointer-events": "auto" } });
  if (!newLength) {
    component.destroyChildComponents(false, true);
    return component;
  }

  const childLength = component.children.length;
  if (newLength === childLength) {
    updateChildrenEQLength(data, component.children);
  } else if (newLength > childLength) {
    const remainingPendingChildren = data.splice(childLength, newLength);
    updateChildrenEQLength(data, component.children);
    const children = await generateComponents(remainingPendingChildren);
    for (const x of children) {
      component.addChild(x);
    }
  } else {
    const extraChildren = component.children.splice(newLength, childLength);
    updateChildrenEQLength(data, component.children);
    extraChildren.forEach(x => x.destroyComponent());
  }
  component.update();
};