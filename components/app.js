import React from "react";
var ReactDOM = require('react-dom');
import Main from "./main";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import Participants from "./participants";
import Footer from "./footer";
import Leftpanel from "./leftpanel";
import Comments from "./comments"





class App extends React.Component {

    render(){
        return(
            <div>
            <Signinbar/>
            <Navbar/>
            <Leftpanel/>
            <Main/>
            <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <div>
    <App/>,
    </div>,

    document.getElementById("container")
);
