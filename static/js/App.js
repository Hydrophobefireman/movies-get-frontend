import {
  createElement as h,
  render,
  Fragment
} from "@hydrophobefireman/ui-lib/src/index.js";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import { AppLoader } from "./AppLoader.js";
import { assign } from "./common.js";
/**
 * @CSS
 */
import "./components/LandingComponent/LandingComponent.css";
import "./components/ErrorComponent/ErrorComponent.css";
import "./components/SearchBoxComponent/SearchBoxComponent.css";
import "./components/DynamicResponseComponent/DynamicResponseComponent.css";
import "./components/RecommendationsComponent/RecommendationsComponent.css";
import "./components/PlayerComponent/PlayerComponent.css";
const App = h(() =>
  h(
    Fragment,
    null,
    h(HeaderComponent),
    h("main", { class: "center" }, h(AppLoader))
  )
);
const subs = [];
window.__globalEvt = {
  /**
   * @param {(e:PopStateEvent|null)=>any} fun
   */
  subscribe(fun) {
    if (!subs.includes(fun)) subs.push(fun);
  },
  unsubscribe(fun) {
    for (let i = 0; i < subs.length; i++) {
      if (subs[i] === fun) return subs.splice(i, 1);
    }
  },
  /**
   * @param {string} e
   */
  emit(e, options) {
    for (const subscription of subs) {
      subscription(e, options);
    }
  },
  unsubscribeAll() {
    subs.length = 0;
  }
};
const root = document.getElementById("app-root");
root.removeAttribute("style");
render(App, root);
window.addEventListener(
  "load",
  () => {
    document.head.appendChild(
      assign(document.createElement("link"), {
        rel: "stylesheet",
        href: "https://fonts.pycode.tk/open-sans.css"
      })
    );
  },
  { once: true }
);
