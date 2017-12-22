import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import {Parse} from "parse";
import { List, Image } from 'semantic-ui-react';
import ListImages from "./listimages";
import Sessionpanel from "./sessionpanel";
import Modal from "./modal";

var Link       = ReactRouterDOM.Link;

Parse.initialize("defaultParseAppId");
Parse.serverURL = 'http://10.2.1.18:3000/parse';





class SessionList extends React.Component {
  render() {
    return (
      <div>
        <Sessionpanel/>
        <ListImages/>
        <Footer/>
      </div>
    )
}
}

export default SessionList;
