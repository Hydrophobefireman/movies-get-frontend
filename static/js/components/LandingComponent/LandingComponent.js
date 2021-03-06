import Component, { h, A } from "@hydrophobefireman/ui-lib";
import "./LandingComponent.css";
import { defaultTitle } from "../../common.js";
import { DynamicResponseComponent } from "../DynamicResponseComponent/DynamicResponseComponent.js";
import { RecommendationsComponent } from "../RecommendationsComponent/RecommendationsComponent.js";
function AddNewMovieComponent() {
  return h(
    "div",
    null,
    "NEW! Add a new movie to our databases by yourself",
    h(
      A,
      { href: "/media/add/", class: ["banner-button", "database-linker"] },
      "Here!"
    )
  );
}

export default class LandingComponent extends Component {
  componentDidMount() {
    document.title = defaultTitle;
  }
  render() {
    return h(
      "section",
      { data: "index" },
      h(AddNewMovieComponent),
      h(DynamicResponseComponent),
      h(RecommendationsComponent)
    );
  }
}
