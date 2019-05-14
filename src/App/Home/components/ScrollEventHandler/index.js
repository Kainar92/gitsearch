import { Component } from "react";
import debounce from "lodash/debounce";

class ScrollEventHandler extends Component {
  handleScroll = debounce(() => {
    localStorage.setItem("scrollPosition", JSON.stringify(window.pageYOffset));
  }, 200);

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return null;
  }
}

export default ScrollEventHandler;
