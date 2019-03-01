import Component from "../router/component.js";
import { TextComponent } from "../router/utils.js";
import {
  asYouTypeComponent,
  animatedInputComponent,
  handleKeyDown as defaulthandleKeyDown
} from "./index.js";
import { parseHash, urlencode } from "../router/routerUtils.js";
import { getMovieMetaData } from "../services/showMetaDataService.js";
import { showErrorComponent } from "./errorComponent.js";
import {
  iframeSelectorComponent,
  urlSelectorComponent,
  downloadURLComponent
} from "./iframeComponent.js";
import { Requests } from "../services/httpService.js";
import { URLBASE } from "../common.js"
const sanitizeURL = url => {
  if (!url || url.toLowerCase() === "none") {
    return null;
  }
  let f;
  try {
    f = new URL(url, `${location.protocol}//${location.hostname}`);
    f.protocol = "https:";
    f = f.toString();
  } catch (e) {
    f = url;
    if (url.startsWith("//")) {
      f = `https:${f}`;
    }
  }
  return f;
};

const currentMovieName = new TextComponent("");
const currentShowNameComponent = new Component("h2", {}, [currentMovieName], {
  style: "font-weight:bold"
});
const subtitlesComponent = new Component("div", {}, []);
const playerComponent = new Component("div", {}, [
  asYouTypeComponent,
  currentShowNameComponent,
  subtitlesComponent,
  urlSelectorComponent,
  iframeSelectorComponent,
  downloadURLComponent
]);

iframeSelectorComponent.bindData(
  "URLArray",
  urlSelectorComponent,
  "URLArray",
  !1
);
iframeSelectorComponent.bindData(
  "selectedURL",
  urlSelectorComponent,
  "selectedURL",
  true
);
iframeSelectorComponent.bindData(
  "URLArray",
  downloadURLComponent,
  "URLArray",
  false
);
async function playerComponentOnAttached() {
  const currentQS = parseHash(location.href).qs;
  const movieID = currentQS.get("id");
  subtitlesComponent.destroyChildComponents(false, true);
  currentMovieName.textContent = "Loading";
  animatedInputComponent.inputComponent.attachEventListener(
    "keydown",
    defaulthandleKeyDown.bind(animatedInputComponent.inputComponent),
    !0
  );

  const metaData = await getMovieMetaData(movieID);
  if (metaData.error) {
    return showErrorComponent(
      "No Movie exists with the given ID",
      playerComponent,
      () => playerComponent.destroyComponent(!0)
    );
  }
  const { url: _url, alt1: _alt1, alt2: _alt2 } = metaData;
  const url = sanitizeURL(_url),
    alt1 = sanitizeURL(_alt1),
    alt2 = sanitizeURL(_alt2);
  const URLArray = [url, alt1, alt2].filter(x => x);
  currentMovieName.textContent = `Watch: ${metaData.movie_name}`;
  iframeSelectorComponent.setState({
    movieID,
    URLArray,
    selectedURL: url || alt1 || alt2
  });
  const subURL = urlencode({ s: movieID });
  const _hasSubs = await Requests.get(
    `/api/movie/has-subtitles?${subURL}`,
    true
  );
  const hasSubs = await _hasSubs.json();
  if (hasSubs.data) {
    subtitlesComponent.destroyChildComponents(false, true);
    subtitlesComponent.children = [
      new Component("a", {}, [new TextComponent("Download Subtitles")], {
        href: `${URLBASE}/api/get-subtitles/?${subURL}`,
        className: "search-button",
        style: "color:black;display:block;margin-bottom:10px"
      })
    ];
    subtitlesComponent.update();
  }
}
playerComponent.onAttached = playerComponentOnAttached;
export default playerComponent;
