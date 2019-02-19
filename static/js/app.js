import Router from "./router/router.js";
import "@babel/polyfill";
import _0 from "../css/main.css";
import _1 from "../css/recommendations.css";
import _2 from "../css/AYTResponses.css";
import { $ } from "./router/utils.js";
import { Requests } from "./services/httpService.js";
import { retry, applyExternalCss, delve } from "./common.js";
import MatSpinner from "./spinner-element.js";
window.customElements.define("mat-spinner", MatSpinner);
window.oldTitle = document.title;
const appRoot = $.id("app-root");
const router = new Router(appRoot);
applyExternalCss("https://fonts.googleapis.com/css?family=Open+Sans");
appRoot.innerHTML =
  "Connecting to the server<br><mat-spinner svgstyle='width:150px;height:150px;margin-top:50px'></mat-spinner>";

retry(() => Requests.get("/collect/"), 3)
  .then(async () => {
    const indexComponent = () =>
      import(/* webpackChunkName:"landing"*/ "./components/index.js");
    const searchResultsComponent = () =>
      import(/* webpackChunkName:"searchResults"*/ "./components/searchResultsComponent.js");
    const playerComponent = () =>
      import(/* webpackChunkName:"player"*/ "./components/playerComponent.js");
    const outComponent = () =>
      import(/* webpackChunkName:"out"*/ "./components/outComponent.js");
    const addMediaComponent = () =>
      import(/* webpackChunkName:"addMedia"*/ "./components/mediaAddComponent.js");
    const allComponent = () =>
      import(/* webpackChunkName:"allShows"*/ "./components/allMoviesComponent.js");
    const addSubtitlesComponent = () =>
      import(/* webpackChunkName:"addSubtitles"*/ "./components/addSubtitles.js");
    const obj = {
      "/": indexComponent,
      "/search/": searchResultsComponent,
      "/watch/": playerComponent,
      "/out/": outComponent,
      "/media/": addMediaComponent,
      "/all/": allComponent,
      "/add-subtitles/": addSubtitlesComponent
    };

    const currRoute = router.currentRoute;
    const reqComponent = obj[currRoute];
    const md = await reqComponent();
    router.registerComponent(currRoute, md.default);
    delete obj[currRoute];
    for (const [k, v] of Object.entries(obj)) {
      router.registerComponent(k, v());
    }
    appRoot.innerHTML = "";
    const currComponent = router.routeData[router.currentRoute];
    if (delve(currComponent, "component.constructor.name") === "Promise") {
      currComponent.then(() => router.startLoad());
    } else {
      router.startLoad();
    }
  })
  .catch(() => (appRoot.innerHTML = "could not connect"));
