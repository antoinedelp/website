import React from "react";
import {Parse} from "parse";
import Footer from "./footer";
import AccountKit from 'react-facebook-account-kit';
var Link       = ReactRouterDOM.Link;
var Session = Parse.Object.extend("Session");
var User = Parse.Object.extend("User");
var Event = Parse.Object.extend("Event")

Parse.initialize("defaultParseAppId");
Parse.serverURL = 'http://10.2.1.18:3000/parse';

class Test extends React.Component {
  render() {
    var sessionsData = [];

  var accessToken = "EAAHf1Wbl3ZAUBADMh24Jqm7MFjSG0ZB6hilpxaxLFhO794gXdAzBj56vizYaPCmK3lvk0Vm14XaZAvguQsIBEuxyoM10GYZCZAo6nYPKIQl1X91AVJZBZBQOb1Ouz3yCvnM09x014fWtKb2Dt5dKBYTtQ7Ut8fRjmoOP7rSELNQ1UUkIS3kJkUznQFJ2ELMmhyPpbM0eZCyh0kKEjoA51FTW4C4ntK7DxzIDU35do1RRc2cpOeldriOxZCECyfdZA3E54ZD";
  var authData = {
        "id": "114249639354533",
        "accessToken": accessToken,
        "expirationDate": "2018-02-09T10:11:20.680Z"
    }

    Parse.Cloud.run("logInWithFacebook", authData)
    .then(function(token){
      console.log("le token est ", token);
      Parse.User.become(token).then(function (user) {
  // The current user is now set to user.
  console.log("le user est ", user)
  var startTime = new Date("21 October 2017 14:48 UTC");
  Parse.Cloud.run("findEvent", {startTime: startTime, radius: 200}, user)
    .then(function(events){
    console.log("voici les events à proximité : ", events);
    console.log("voici le nombre d'événements : ", events.length);

    for(var i=0; i < events.length; i++){
    var eventQuery = new Parse.Query(Event);
    var id = events[i].id
    console.log(id);
    console.log("traitement de l'élément numéro " + i + " " + events[i].id);
    eventQuery.get(id, {
    success: function(results) {
    // The object was retrieved successfully.
    var title = results.get("title");
    console.log(title);
    var positionName = results.get("positionName");
    console.log(positionName);
    var administrator = results.get("administrator");
    console.log(administrator);
    var evenement = {title: title, positionName: positionName, administrator: administrator}
    console.log("l evenement est ", evenement);
    sessionData.push(evenement);
    console.log(sessionData);
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    console.log(error)
  }
});
}

}, function (error) {
  console.log(error)
  // The token could not be validated.
})})});

// Mettre les events dans le Constructor

    /*  let query = new Parse.Query('_Session');
      query.equalTo('sessionToken', token);
      query.include('user');
      query.first({
        useMasterKey: true,
        success: function(user2) {
          console.log(user2);
          let user = session.get('user');
          console.log(user);
      },
    error: function(error) {
    console.log("Query error: " + error);
  }
      }
    )
    })
/*

        function(session) {
         let user = session.get('user');
         console.log(user);
         console.log("big success");
         return user;
      }, function(err) {
        console.log("it failed: ", err)
      })
      .then(user => console.log(user) Parse.Cloud.run("findEvent", {startTime: "2017-12-22T16:14:00.000Z", radius: 200}, user)).then(function(events){
        console.log("voici les events à proximité : ", events);
        console.log("voici le nombre d'événements : ", events.length)
        return events;
TEST SESSIONS

        */

return(
  <div>
    <AccountKit
  appId="527582624079253" // Update this!
  version="v1.0" // Version must be in form v{major}.{minor}
  onResponse={(resp) => console.log(resp)}
  csrf={'csrf'} // Required for security
  countryCode={'+33'} // eg. +60
  phoneNumber={'default phone number'} // eg. 12345678
  emailAddress={'default email address'} // eg. me@site.com
>
  {p => <button {...p}>Se connecter</button>}
</AccountKit>
  <Footer/>
</div>
)

}}
export default Test;
