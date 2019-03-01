import { isDev, TextComponent } from "../router/utils.js";
import { loadHash, urlencode } from "../router/routerUtils.js";
import Component from "../router/component.js";
import { sanitizedName } from "../common.js";
const parseSocketResponse = responeDict => {
  let response;
  if (typeof responeDict === "string") {
    isDev ? console.warn("return response as an object!") : void 0;
    response = JSON.parse(responeDict);
  }
  response = responeDict;
  if (response["no-res"]) {
    return [];
  }
  const data = response.data;
  return data || [];
};

const generateComponents = data => {
  const children = [];
  for (const resp of data) {
    const movieID = resp.id;
    const movieName = resp.movie;
    const url = `/watch?${urlencode({
      id: movieID,
      movie: sanitizedName(movieName)
    })}`;
    const child = new Component("div", { id: movieID, movieName }, [], {
      className: "query-response"
    });
    const link = new Component(
      "a",
      {},
      [new TextComponent(movieName, movieID)],
      {
        href: `#${url}`,
        className: "movie-link"
      }
    ).attachEventListener("click", () => {
      getResponseComponent();
      loadHash(
        `/watch?${urlencode({
          id: child.getState.id,
          movie: sanitizedName(child.getState.movieName)
        })}`
      );
    });
    child.addChild(link);
    children.push(child);
  }
  return children;
};

const updateChildrenEQLength = (_resp, childComponents) => {
  childComponents.forEach((child, i) => {
    const resp = _resp[i];
    const a = child.children[0];
    const prevID = child.getState.id;
    const textComponent = TextComponent.find(prevID, a.$element)[0];
    const movieID = resp.id,
      movieName = resp.movie;
    if (prevID === movieID) {
      return;
    }
    const url = `/watch?${urlencode({ id: movieID, movie: movieName })}`;
    a.setDomAttrs({ href: `#${url}` }, false);
    child.setState({ id: movieID, movieName }, false);
    textComponent.data = movieName;
    textComponent.tag = movieID;
  });
};

const component = new Component("div", {}, [], { class: ["response-parent"] });
export const getResponseComponent = responseDict => {
  if (!responseDict) {
    component.removeClassName("has-data");
    component.destroyChildComponents(false, true);
    return component;
  }
  component.addClassName("has-data");
  const data = parseSocketResponse(responseDict);
  const newLength = data.length;
  if (!newLength) {
    component.removeClassName("has-data");
  }
  const childLength = component.children.length;
  if (newLength === childLength) {
    updateChildrenEQLength(data, component.children);
  } else if (newLength > childLength) {
    const remainingPendingChildren = data.splice(childLength, newLength);
    updateChildrenEQLength(data, component.children);
    const children = generateComponents(remainingPendingChildren);
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
