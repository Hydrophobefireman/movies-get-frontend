import Component from "../router/component.js";
import { TextComponent } from "../router/utils.js";
import { getMovieMetaData } from "../services/showMetaDataService.js";
import { loadHash, urlencode } from "../router/routerUtils.js";
import { preventDefault } from "../common.js";
const loadingHTML =
  "data:text/html;base64,PGRpdiBzdHlsZT0iZm9udC1mYW1pbHk6c2Fucy1zZXJpZjttYXJnaW46YXV0bzt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDpib2xkIj5Mb2FkaW5nIE1vdmllIERhdGE8L2Rpdj4=";

const extractHostName = url => {
  return new URL(url).hostname;
};

class IframeComponent extends Component {
  onAttached() {
    this.children[1].$element.src = loadingHTML;
  }
  async update() {
    const frameEl = this.children[1];
    const state = this.getState;
    if (state.selectedURL && frameEl.$element.src !== state.selectedURL) {
      frameEl.$element.src = loadingHTML;
      return setTimeout(
        () =>
          state.selectedURL
            ? frameEl.setDomAttrs({ src: state.selectedURL }, true)
            : void 0,
        700
      );
    }
    this.updateChildren(this.$element);
    this.updateDOMAttrs();
  }
  constructor(type, props, children, domprops, evts) {
    super(type, props, children, domprops, evts);
  }
}

class URLSelectorComponent extends Component {
  update() {
    // if (!this.isConnected) {
    //   return this.updateDOMAttrs();
    // }
    const state = this.getState;
    const comp = this;
    const arr = state.URLArray;
    function handleButtonClick() {
      const $state = this.getState;
      const url = $state.url;
      console.log($state);
      comp.setState({ selectedURL: url });
    }
    if (arr) {
      this.destroyChildComponents(false, true);
      for (const child of arr) {
        const childComponent = new Component(
          "button",
          { url: child },
          [new TextComponent(extractHostName(child))],
          { className: "url-selector-button" }
        );
        childComponent.attachEventListener(
          "click",
          handleButtonClick.bind(childComponent)
        );
        this.addChild(childComponent);
      }
    }
    this.updateChildren(this.$element);
    this.updateDOMAttrs();
  }
  constructor(...args) {
    super(...args);
  }
}
class DownloadURLComponent extends Component {
  update() {
    const state = this.getState;
    const urls = state.URLArray;
    this.destroyChildComponents(false, true);
    if (urls) {
      const $child = new Component("div");
      for (const url of urls) {
        const child = new Component(
          "a",
          { url },
          [new TextComponent(`Download ${extractHostName(url)}`)],
          {
            className: "download-url-component",
            href: `#/out?${urlencode({ url })}`
          }
        ).attachEventListener("click", e => {
          preventDefault(e);
          loadHash(`/out?${urlencode({ url })}`);
        });
        $child.addChild(child, false);
      }
      this.addChild($child);
    }
    this.updateChildren(this.$element);
  }
  constructor(...a) {
    super(...a);
    this.onDestroy = () => {
      this.clearState();
      ((this.children[1] || {}).$element || {}).src = loadingHTML;
    };
  }
}
export const iframeSelectorComponent = new IframeComponent(
  "div",
  { currentEp: null },
  [
    new TextComponent("", "episode-id"),
    new Component("iframe", {}, [], {
      src: loadingHTML,
      className: "frame-src"
    })
  ],
  {}
);
export const urlSelectorComponent = new URLSelectorComponent("div");
export const downloadURLComponent = new DownloadURLComponent("div", {}, []);
