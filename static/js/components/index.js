import Component from "../router/component.js";
import { TextComponent } from "../router/utils.js";
import { getNewInputComponent, setTitle } from "./inputComponent.js";
import { loadHash, urlencode } from "../router/routerUtils.js";
import { getResponseComponent } from "./socketResponseParser.js";
import RecommendationsComponent from "./recommendationsComponent.js";
const newmovieComponent = new Component("div", {}, [
  new TextComponent("NEW! Add a new movie to our databases by yourself"),
  new Component("a", {}, [new TextComponent("Here!")], {
    className: ["banner-button", "database-linker"],
    href: "#/media/add/"
  }).attachEventListener("click", e => {
    e.preventDefault();
    if (e.ctrlKey) {
      return;
    }
    loadHash("/media/add/");
  })
]);
const resultsComponent = new Component("div").addChild(getResponseComponent());
export const animatedInputComponent = getNewInputComponent("Search For movies");

export function handleInput({ target: { value: val } }) {
  const inp = animatedInputComponent.inputComponent;
  inp.handleInput.call(this, { target: { value: val } });
  if (!val.trim()) {
    getResponseComponent();
  }
  animatedInputComponent.inputComponent.appendComponentOnResponse(
    getResponseComponent
  );
}
export function handleKeyDown(e) {
  /*CTRL+u*/
  if (e.keyCode === 85 && e.ctrlKey) {
    e.preventDefault();
    animatedInputComponent.inputComponent.setState({ value: "" });
    getResponseComponent();
  } else if (e.keyCode === 13) {
    const val = this.getState.value || "";
    if (val.trim()) {
      loadHash(`/search?${urlencode({ q: val })}`);
    }
  }
}

export const searchButtonComponent = new Component(
  "button",
  {},
  [new TextComponent("Search")],
  { class: "search-button" }
).bindData("query", animatedInputComponent.inputComponent, "value", false);

export const asYouTypeComponent = new Component("div", {}, [
  animatedInputComponent.component,
  resultsComponent,
  searchButtonComponent
]);
export const indexComponent = new Component("div", {}, [
  newmovieComponent,
  asYouTypeComponent,
  new Component(
    "div",
    {},
    [new TextComponent("Check some of these movies out")],
    { style: "display:block;margin-top: 50px;" }
  )
]);
indexComponent.addChild(
  new RecommendationsComponent().futureAddOn(indexComponent)
);
animatedInputComponent.inputComponent.attachEventListener(
  "input",
  handleInput.bind(animatedInputComponent.inputComponent),
  true
);
export function handleButtonClick() {
  const q = this.getState.query;
  if (q && q.trim()) {
    loadHash(`/search?${urlencode({ q })}`);
  }
}
indexComponent.onAttached = () => {
  setTitle(window.oldTitle);
  animatedInputComponent.inputComponent.attachEventListener(
    "keydown",
    handleKeyDown.bind(animatedInputComponent.inputComponent),
    true
  );
  searchButtonComponent.attachEventListener(
    "click",
    handleButtonClick.bind(searchButtonComponent),
    true
  );
};
