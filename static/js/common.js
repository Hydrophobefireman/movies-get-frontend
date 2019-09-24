import { loadURL } from "./@ui/ui-lib.js";
export const defaultTitle = "Watch Movies on Movies-Get";
export {
  default as assign
} from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign.js";
export {
  default as nextEvent
} from "@hydrophobefireman/j-utils/@build-modern/src/modules/nextEvent/index.js";
import _urlencode from "@hydrophobefireman/j-utils/@build-modern/src/modules/urlencode/index.js";
export const urlencode = _urlencode;
const apiHost = window.location.host.includes("localhost")
  ? "localhost:5000"
  : "movies-get.herokuapp.com";
export const preventDefault = e => e.preventDefault();
export const sanitizedName = s => {
  try {
    return s.replace(/([^\w]|_)/g, "-").replace(/--/g, "-");
  } catch (e) {
    console.log(s);
  }
};
export const retry = async (func, retryCount, waitTimeInMS = 100) => {
  let error;
  let tryCount = 0;
  while (tryCount < retryCount) {
    try {
      return await func();
    } catch (f) {
      error = f;
    }
    await new Promise(resolve => setTimeout(resolve, waitTimeInMS));
    tryCount++;
  }
  throw error;
};
export const URLBASE = `${window.location.protocol}//${apiHost}`;
export const localWebsocketURL = a =>
  `${
    "https:" === window.location.protocol ? "wss://" : "ws://"
  }${apiHost}/${a}`;

let _supportsWebp = null;
export const supportsWebp = () =>
  new Promise((resolve, _) => {
    if (typeof _supportsWebp === "boolean") return resolve(_supportsWebp);
    const img = new Image();
    img.onload = () => {
      const ret = img.naturalHeight === 1 && img.naturalWidth === 1;
      _supportsWebp = ret;
      resolve(ret);
    };
    img.onerror = () => resolve(false);

    img.src =
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  });

export const getWebpifSupported = async url => {
  if (!url) return url;
  const s = await supportsWebp();
  if (s) {
    const _ = url.split(".");
    _[_.length - 1] = "webp";
    return _.join(".");
  } else {
    return url;
  }
};

const textArr = document.createElement("textarea");
export const decodeHTML = html => {
  if (!html) return "";
  textArr.innerHTML = html;
  return textArr.value;
};
export const defer = fn => Promise.resolve().then(fn);

export function loadSearchResults(q) {
  loadURL(`/search?${urlencode({ q })}`);
}

export function getWatchURL(id, movie) {
  return `/watch?${urlencode({ id, movie: sanitizedName(movie) })}`;
}

export function resize(url) {
  if (!url) return url;
  const b = url.split("/upload/");
  b[1] = b[1].split("/");
  b[1] = "w_150,h_200/" + b[1][1];
  return b.join("/upload/");
}
