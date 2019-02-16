import Component from "../router/component.js";
import { TextComponent } from "../router/utils.js";
import { getNewInputComponent } from "./inputComponent.js";
import { Requests } from "../services/httpService.js";
import { urlencode } from "../router/routerUtils.js";
import { getWebpifSupported } from "../common.js";

const animInput = getNewInputComponent("Press enter to search", false);
const inputComponent = animInput.inputComponent;
const searchResults = new Component("div", {}, [], { className: "rec-box" });
const addSubtitlesComponent = new Component("div", {}, [
  animInput.component,
  searchResults
]);
addSubtitlesComponent.onAttached = () => {
  searchResults.destroyChildComponents(false, true);
};
function getFileAsBase64(buffer) {
  return new Promise((resolve, _) => {
    const blob = new Blob([buffer], {
      type: "application/octet-binary"
    });
    const reader = new FileReader();
    reader.onload = evt => {
      const dataurl = evt.target.result;
      resolve(dataurl.substr(dataurl.indexOf(",") + 1));
    };
    reader.readAsDataURL(blob);
  });
}
const decoder = new TextDecoder();
const replaceCarriageReturns = f => {
  const str = decoder.decode(f);
  return str.replace(/\r\n/g, "\n");
};
function getSubtitleFile() {
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".srt, application/x-subrip, text/srt";
    input.onchange = ({ target: { files } }) =>
      resolve(new Response(files[0]).arrayBuffer());
    input.click();
  });
}
async function handleMovieClick() {
  const { id } = this.getState;
  const file = await getSubtitleFile();
  const buf = replaceCarriageReturns(file);
  const req = await Requests.post(
    "/_/api/experiments/subtitle-remote-upload",
    true,
    { mid: id, subs: buf },
    { "content-type": "application/json" }
  );
  const resp = await req.text();
  return alert(`Response:${resp}`);
}
const _search = async val => {
  const data = await Requests.post(
    "/api/data/search/",
    true,
    urlencode({ q: val })
  );
  const _ = await data.json();
  return _.movies || [];
};
const updateSearchResults = async data => {
  searchResults.destroyChildComponents(false, true);
  if (!data.length) {
    searchResults.addChild(new TextComponent("No Movies Found"), true);
  }
  const children = [];
  for (const dat of data) {
    const movieID = dat.id,
      movieName = dat.movie,
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
      className: "rec-wrapper"
    };
    const wrapComponent = new Component(
      "div",
      props,
      wrapComponentChildren,
      domProps
    );
    wrapComponent.attachEventListener(
      "click",
      handleMovieClick.bind(wrapComponent)
    );
    children.push(wrapComponent);
  }
  searchResults.children = children;
  searchResults.renderChildrenOnly();
};
async function handleKeyDown(e) {
  if (e.keyCode === 13) {
    const val = (e.target.value || "").trim();
    if (val) {
      const data = await _search(val);
      updateSearchResults(data);
    }
  }
}
inputComponent.attachEventListener(
  "keydown",
  handleKeyDown.bind(inputComponent)
);
export default addSubtitlesComponent;
