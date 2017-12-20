import React from "react";
import NavbarHome from "./navBarHome";
import VideoHome from "./videoHome";
import Footer from "./footer";


class Homepage extends React.Component {
  render() {
    return (
      <div data-smooth-scroll-offset="77">
        <NavbarHome/>
        <div class="main-container">
        <VideoHome/>
      </div>
      <Footer/>
        </div>
    );
  }
}

export default Homepage;
