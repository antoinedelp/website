import React from "react";
var ReactDOM = require('react-dom');
import Main from "./main";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import Participants from "./participants";
import Footer from "./footer";
import Leftpanel from "./leftpanel";
import Comments from "./comments"
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
console.log(response);
}


class App extends React.Component {

    render(){
        return(
            <div>
                <FacebookLogin
                  appId="527582624079253"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook} />
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
