import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
var Link       = ReactRouterDOM.Link;


class Home extends React.Component {
  render() {

    return (
      <div>
        <Signinbar/>
        Hello ! this is the homepage.
        Click here for sessions :
        <Link to="/session"> Cliquer ici !</Link>
        <Footer/>
      </div>
    )
}
}

export default Home;
