import React from "react";
var ReactDOM = require('react-dom');
var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;

import Main from "./main";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import Participants from "./participants";
import Footer from "./footer";
import Leftpanel from "./leftpanel";
import Comments from "./comments"
import Home from "./home";
import Homepage from "./homepage";
import Session from "./session";
import SessionList from "./sessionslist";
import Test from "./test";

class App extends React.Component {
  render(){
    return(
      <Homepage/>
    )
  }
};

class Test2 extends React.Component {
  render(){
    return(
      <Test/>
    )
  }
};


ReactDOM.render(
  <Router>
      <div>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/logout" component={Home}/>
          <Route exact path="/session" component={Session}/>
          <Route exact path="/sessionlist" component={SessionList}/>
          <Route exact path="/test" component={Test2}/>
      </div>
   </Router>,

    document.getElementById("container")
);
