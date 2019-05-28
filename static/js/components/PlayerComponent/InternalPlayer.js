import Component, {
  createElement as h,
  Fragment,
  A
} from "../../@ui/ui-lib.js";
import { defaultHTML, getHost } from "./util.js";
import { urlencode, decodeHTML } from "../../common.js";
import { Requests } from "../../services/httpService.js";
export class InternalPlayerComponent extends Component {
  state = { src: defaultHTML };
  componentDidMount() {
    if (this.state.src !== defaultHTML) return;
    if (this.props.URLs.length) {
      this.setState({ src: this.props.URLs[0] });
    }
  }
  componentDidUpdate = this.componentDidMount;
  setSrc = src => this.setState({ src });

  render({ URLs, movieName, id }) {
    return h(
      Fragment,
      null,
      h("h2", { style: { fontWeight: "bold" } }, decodeHTML(movieName)),
      h(SubtitlesComponent, { id }),
      URLs.map(x => h(URLSelectorComponent, { url: x, onClick: this.setSrc })),
      h("iframe", { class: "frame-src", src: this.state.src }),
      URLs.map(x => h(URLDownloaderComponent, { href: x }))
    );
  }
}
class SubtitlesComponent extends Component {
  state = { hasSubtitles: null };
  css = {
    color: "black",
    display: "block",
    margin: "auto",
    marginBottom: "10px",
    borderRadius: "20px",
    width: "50%"
  };
  componentWillMount() {
    if (typeof this.state.hasSubtitles === "boolean") return;
    this.setState({ hasSubtitles: false });
    Requests.get("/api/movie/has-subtitles?" + urlencode({ s: this.props.id }))
      .then(x => x.json())
      .then(resp => this.setState({ hasSubtitles: resp.data }));
  }
  componentWillUpdate = this.componentWillMount;
  render({ id }, { hasSubtitles }) {
    if (hasSubtitles) {
      return h(
        "a",
        {
          class: "search-button",
          target: "_blank",
          style: this.css,
          href: `https://movies-get.herokuapp.com/api/get-subtitles/?${urlencode(
            {
              s: id
            }
          )}`
        },
        "Download Subtitles"
      );
    }
    return h("a", { style: { display: "none" } });
    // @todo fix bug in the ui-lib with null returns
  }
}

function URLSelectorComponent({ url, onClick }) {
  if (!url) return null;
  return h(
    "button",
    {
      onClick: () => onClick(url),
      class: "url-selector-button",
      style: { cursor: "pointer" }
    },
    getHost(url)
  );
}
function URLDownloaderComponent({ href }) {
  if (!href) return null;
  const url = `/out?${urlencode({ u: href })}`;
  return h(
    A,
    { href: url, class: ["download-url-component", "search-button"] },
    "Download from: ",
    getHost(href)
  );
}
