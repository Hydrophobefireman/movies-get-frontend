import {
  createElement as h,
  Fragment
} from "@hydrophobefireman/ui-lib/src/index.js";
let spinner;
if (window.customElements) {
  const SIZE = "size";
  __init__({
    "loading-spinner": {
      modifyConstructor(c) {
        Object.defineProperty(c, "observedAttributes", {
          get() {
            return [SIZE];
          }
        });
      },
      modifyPrototype(p) {
        Object.defineProperties(p, {
          attributeChangedCallback: {
            value: function(name, oldVal, newVal) {
              if (name === SIZE && newVal !== oldVal) {
                const css = this.shadowRoot.querySelector("div").style;
                css.height = css.width =
                  typeof newVal === "string" && newVal.includes("px")
                    ? newVal
                    : `${newVal}px`;
              }
            }
          },
          [SIZE]: {
            get() {
              const value = this.getAttribute(SIZE);
              return value === null ? "" : value;
            },
            set(v) {
              this.setAttribute(SIZE, v);
            }
          }
        });
      }
    }
  });

  spinner = h("loading-spinner", { size: 55 });
} else {
  spinner = "Connecting to the server";
}
export function LoadingSpinner() {
  return h(Fragment, null, spinner);
}
