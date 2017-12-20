import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Signinbar from "./signinbar";
import {Parse} from "parse";
var Link       = ReactRouterDOM.Link;

Parse.initialize("defaultParseAppId");
Parse.serverURL = 'http://10.2.1.18:3000/parse';

class SessionList extends React.Component {
  render() {
  var accessToken = "EAAHf1Wbl3ZAUBADMh24Jqm7MFjSG0ZB6hilpxaxLFhO794gXdAzBj56vizYaPCmK3lvk0Vm14XaZAvguQsIBEuxyoM10GYZCZAo6nYPKIQl1X91AVJZBZBQOb1Ouz3yCvnM09x014fWtKb2Dt5dKBYTtQ7Ut8fRjmoOP7rSELNQ1UUkIS3kJkUznQFJ2ELMmhyPpbM0eZCyh0kKEjoA51FTW4C4ntK7DxzIDU35do1RRc2cpOeldriOxZCECyfdZA3E54ZD";
  var authData = {
        "id": "114249639354533",
        "accessToken": accessToken,
        "expirationDate": "2018-02-09T10:11:20.680Z"
    }

    Parse.Cloud.run("logInWithFacebook", authData).then(function(token){

      let query = new Parse.Query('_Session');
      query.equalTo('sessionToken', token);
      query.include('user');
      console.log(query);
      query.first({useMasterKey: true}).then(function(session) {
         let user = session.get('user');
         console.log("big success");
      }, function(err) {
        console.log("it failed: ", err)
      })
      .then(Parse.Cloud.run("findEvent", {startTime: "2017-12-22T16:14:00.000Z", radius: 200}, user).then(function(events){
        console.log("voici les events à proximité : ", events);
        console.log("voici le nombre d'événements : ", events.length)
        return events;
      })
    )
  }
);

    return (
      <div>
        <Signinbar/>
{events}

        <Footer/>
      </div>
    )
}
}

export default SessionList;
