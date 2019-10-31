import Component, {
  createElement as h
} from "@hydrophobefireman/ui-lib/src/index.js";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner.js";
import { getMovieDetails, txtComponent } from "./util.js";
import { InternalPlayerComponent } from "./InternalPlayer.js";
export class MovieDetailsComponent extends Component {
  state = { badId: false, URLArr: [], fetchingDetails: false, movieName: "" };
  render({ id }, { URLArr, badId, fetchingDetails, movieName }) {
    if (badId || (!URLArr || (!URLArr.length && !fetchingDetails))) {
      return txtComponent;
    } else if (fetchingDetails) {
      return h(
        "div",
        { "data-fetch": JSON.stringify(this.props) },
        "Loading Movie Data",
        h("div", null, h(LoadingSpinner))
      );
    } else {
      return h(InternalPlayerComponent, { URLs: URLArr, movieName, id });
    }
  }
  componentDidMount(oldProps) {
    const id = this.props.id;
    if (!id) {
      this.setState({ badId: true });
    }
    if (
      !this.state.fetchingDetails &&
      (!oldProps || oldProps.id !== this.props.id)
    ) {
      this.setState({ URLArr: [], badId: false, fetchingDetails: true });
      return getMovieDetails(id)
        .then(x =>
          this.setState({
            URLArr: x.urls,
            badId: false,
            fetchingDetails: false,
            movieName: x.movie
          })
        )
        .catch(
          e =>
            console.log(e) ||
            this.setState({ badId: true, URLArr: [], fetchingDetails: false })
        );
    }
  }
  componentDidUpdate = this.componentDidMount;
}
