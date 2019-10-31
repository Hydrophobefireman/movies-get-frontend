import Component, {
  createElement as h,
  Fragment
} from "@hydrophobefireman/ui-lib/src/index.js";
import { SearchBoxComponent } from "../SearchBoxComponent/SearchBoxComponent.js";
import { Requests } from "../../services/httpService.js";
import { SearchComponent } from "../SearchResultsComponent/SearchComponent.js";
const decoder = new TextDecoder();
const replaceCarriageReturns = f => {
  const str = decoder.decode(f);
  return str.replace(/\r\n/g, "\n");
};
function getSubtitleFile() {
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = ({ target: { files } }) =>
      resolve(new Response(files[0]).arrayBuffer());
    input.click();
  });
}
export default class SubtitleComponent extends Component {
  handleClick = async id => {
    const file = await getSubtitleFile();
    const buf = replaceCarriageReturns(file);
    const req = await Requests.post(
      "/_/api/experiments/subtitle-remote-upload",
      true,
      { mid: id, subs: buf },
      { "content-type": "application/json" }
    );
    const resp = await req.text();
    return alert(`Response:${resp}`);
  };
  handleSubmit = async value => {
    this.setState({ showResults: true, v: value });
  };

  render({}, { showResults, v }) {
    return h(
      Fragment,
      null,
      h(SearchBoxComponent, {
        id: "add-subtitles",
        onSubmit: this.handleSubmit
      }),
      showResults
        ? h(SearchComponent, { q: v, customOnClick: this.handleClick })
        : null
    );
  }
}
