import { createElement as h, render, Fragment } from "./@ui/ui-lib.js";
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
