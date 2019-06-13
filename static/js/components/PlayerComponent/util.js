import { Requests } from "../../services/httpService.js";
import { createElement as h } from "../../@ui/ui-lib.js";
import { compatMap, compatMapGet, compatMapSet } from "../../common.js";
export const defaultHTML =
  "data:text/html;base64,PGh0bWw+PGJvZHkgc3R5bGU9Im1hcmdpbjphdXRvO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6Ym9sZCI+TG9hZGluZy4uLjwvYm9keT48L2h0bWw+";
export const cache = compatMap();
console.log("video player cache:", cache);
export const sanitizeURL = url => {
  if (!url || url.toLowerCase() === "none") {
    return null;
  }
  let f;
  try {
    f = new URL(url, `${location.protocol}//${location.hostname}`);
    f.protocol = "https:";
    f = f.toString();
  } catch (e) {
    f = url;
    if (url.startsWith("//")) {
      f = `https:${f}`;
    }
  }
  return f;
};
const endPoint = "/api/movie/";
const makeRequest = async id => {
  const data = await Requests.post(
    endPoint,
    true,
    { id },
    {
      "content-type": "application/json"
    }
  );
  const ret = await data.json();
  if(ret.error||!ret.movie_name) throw new Error()
  return {
    movie: ret.movie_name,
    urls: [ret.url, ret.alt1, ret.alt2].map(sanitizeURL)
  };
};
export const txtComponent = h("div", null, "No movie exists with the given ID");
export const getMovieDetails = async id => {
  const c = compatMapGet(cache, id);
  if (c) {
    console.log("refreshing cache in background");
    makeRequest(id).then(data => compatMapSet(cache, id, data));
    return c;
  } else {
    const data = await makeRequest(id);
    compatMapSet(cache, id, data);

    return data;
  }
};

export function getHost(href) {
  return new URL(href).hostname;
}
