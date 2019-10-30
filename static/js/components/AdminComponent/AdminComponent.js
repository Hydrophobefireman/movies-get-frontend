import { createElement as h, Fragment, Component } from "../../@ui/ui-lib.js";
import { SearchBoxComponent } from "../SearchBoxComponent/SearchBoxComponent.js";
import { Requests } from "../../services/httpService.js";
import { SearchComponent } from "../SearchResultsComponent/SearchComponent.js";
import entries from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/entries";
import backSVG from "../../../../assets/images/back.svg";
import backSVGWhite from "../../../../assets/images/back-w.svg";
const API_URL = "/api/add-movie/custom/";
const getSVG = () =>
  document.body.hasAttribute("dark") ? backSVGWhite : backSVG;
export default class AdminComponent extends Component {
  state = { optionSelected: null };

  _force = () => this.setState({});
  componentWillUnmount() {
    window.__globalEvt.unsubscribe(this._force);
  }
  componentDidMount() {
    window.__globalEvt.subscribe(this._force); // force update
  }
  _reset = () =>
    this.setState({ showResults: false, v: null, optionSelected: null });
  _setOption = val => this.setState({ optionSelected: val });

  render({}, { optionSelected }) {
    if (!optionSelected) {
      return h(OptionComponent, {
        data: ["add", "edit"],
        updater: this._setOption
      });
    }
    return h(
      Fragment,
      null,
      h("div", {
        onClick: this._reset,
        class: "back-svg",
        style: { backgroundImage: `url(${getSVG()})` }
      }),
      optionSelected === "edit" ? h(EditNewMovie) : h(AddNewMovie)
    );
  }
}

class AddNewMovie extends Component {
  errState(type) {
    this.setState({ error: type });
  }
  _post(obj) {
    Requests.post(API_URL, true, obj, { "content-type": "application/json" })
      .then(x => x.json())
      .then(data => {
        if (data.error) {
          return this.setState({ error: data.error });
        }
        return this.setState({ success: true });
      });
  }
  handleSubmit = () => {
    const { movie, url, alt1, alt2, thumb, key } = this.state.inputProps;
    if (!movie || !thumb || !url || !key) {
      return this.errState("empty");
    }
    this._post({
      movie,
      "movie-urls": [url, alt1, alt2],
      type: "add",
      thumb,
      token: key
    });
  };
  state = {
    inputProps: { movie: "", url: "", alt1: "", alt2: "", thumb: "", key: "" }
  };
  getHandleInput = key => e =>
    this.setState(ps => {
      const inputProps = ps.inputProps;
      ps.inputProps[key] = e.target.value;
      return { inputProps };
    });
  render({}, state) {
    return h(
      "form",
      { action: "javascript:", onSubmit: this.handleSubmit },
      entries(state.inputProps).map(([key, value]) =>
        h("input", {
          placeholder: key,
          value: value,
          class: "data-inp-admin paper-input",
          onInput: this.getHandleInput(key)
        })
      ),

      h("button", { class: "search-button" }, "Add Movie"),
      state.error ? h("div", { style: "color:red" }, state.error) : null
    );
  }
}
function OptionComponent({ data, updater }) {
  return h(
    "div",
    null,
    h("div", null, "Select Option"),
    h(
      "div",
      { class: "option-contain" },
      data.map(x =>
        h(
          "button",
          {
            class: "search-button admin-button",
            onClick: () => updater(x)
          },
          x
        )
      )
    )
  );
}

class EditNewMovie extends AddNewMovie {
  state = { inputProps: { url: "", alt1: "", alt2: "", key: "" } };
  handleSubmit = () => {
    const { url, alt1, alt2, key } = this.state.inputProps;
    if (!url || !key) {
      return this.errState("empty");
    }
    this._post({
      "movie-urls": [url, alt1 || null, alt2 || null],
      type: "edit",
      token: key,
      mid: this.state.mid
    });
  };
  _searchBoxOnSubmit = v => this.setState({ showResults: true, v });
  handleClick = e => this.setState({ showEditor: true, mid: e });
  render(_, { showEditor, v, showResults }) {
    if (this.state.success) return "Success";
    if (showEditor) return super.render(_, this.state);
    return h(
      "div",
      null,
      h(SearchBoxComponent, {
        id: "add-subtitles",
        onSubmit: this._searchBoxOnSubmit
      }),
      showResults
        ? h(SearchComponent, { q: v, customOnClick: this.handleClick })
        : null
    );
  }
}
