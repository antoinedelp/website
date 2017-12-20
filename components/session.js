import React from "react";
import Main from "./main";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import Participants from "./participants";
import Footer from "./footer";
import Homepage from "./homepage";




class Session extends React.Component {

    render(){
        return(
            <div>
            <Signinbar/>
            <Navbar/>
            <Main/>
            <Footer />
            </div>
        )
    }
}

export default Session;
