import React from "react";
import NavbarHome from "./navBarHome";
import VideoHome from "./videoHome";
import Footer from "./footer";
import Modal from "./modal";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <NavbarHome/>
        <div className="main-container">
        <VideoHome/>
      </div>
      <Footer/>
        </div>
    );
  }
}

export default Homepage;
