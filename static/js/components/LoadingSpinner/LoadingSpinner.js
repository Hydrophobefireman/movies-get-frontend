import {
  createElement as h,
  Fragment
} from "@hydrophobefireman/ui-lib";
import { init } from "@hydrophobefireman/qwc/dist/index.modern.js";
let spinner;
if (window.customElements) {
  const SIZE = "size";
  init({
    "loading-spinner": {
      observedAttributes: [
        {
          prop: SIZE,
          listener(oldVal, newVal) {
            if (newVal !== oldVal) {
              const css = this.shadowRoot.querySelector("div").style;
              css.height = css.width =
                typeof newVal === "string" && newVal.includes("px")
                  ? newVal
                  : `${newVal}px`;
            }
          }
        }
      ]
    }
  });

  spinner = h("loading-spinner", { size: 55 });
} else {
  spinner = "Connecting to the server";
}
export function LoadingSpinner() {
  return h(Fragment, null, spinner);
}
