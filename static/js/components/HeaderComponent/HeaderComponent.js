import Component, {
  createElement as h,
  A,
  RouterSubscription,
  Router
} from "../../@ui/ui-lib.js";
import "./HeaderComponent.css";
export class HeaderComponent extends Component {
  state = { currentUrl: Router.getPath };
  onURLChange = () => this.setState({ currentUrl: Router.getPath });
  componentWillMount() {
    RouterSubscription.subscribe(this.onURLChange);
  }
  // // // component will never unmount // // //
  //   componentWillUnmount() {
  //     RouterSubscription.unsubscribe(this.onUrlChange);
  //   }
  render(_, { currentUrl }) {
    return h(
      "header",
      null,
      currentUrl !== "/" &&
        h(
          A,
          { href: "/", class: ["banner-button", "router-link"] },
          "Home Page"
        ),
      currentUrl !== "/all" &&
        h(
          A,
          { href: "/all", class: ["banner-button", "router-link"] },
          "All Movies"
        )
    );
  }
}
