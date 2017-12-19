var express           = require('express');
var app               = express();
var Parse             = require('parse/node');



var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));



// inscription d'un utilisateur
/*
var user = new Parse.User();
user.set("username", "Testeur");
user.set("password", "Test");
user.set("name", "Testeur");
user.set("email", "testeur@test.com");

user.signUp(null, {
  success: function(user) {
console.log("utilisateur enregistré !")  ,


Parse.User.become("r:7787965d284a8fa08510828ab15547e7").then(function (user) {
  // The current user is now set to user.
  console.log("this user is registered");
  var currentUser = Parse.User.current();
  console.log("the current User is " + currentUser)
}, function (error) {
  // The token could not be validated.
})},


  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});


Parse.User.logIn("Testeur", "Test", {
  success: function(user) {
console.log("utilisateur bien loggué" + user)  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

//var currentUser = Parse.User.current();
//console.log("this user is " + currentUser);




// AUTH DATA ET FACEBOOK LOGIN

var accessToken = "EAAHf1Wbl3ZAUBADMh24Jqm7MFjSG0ZB6hilpxaxLFhO794gXdAzBj56vizYaPCmK3lvk0Vm14XaZAvguQsIBEuxyoM10GYZCZAo6nYPKIQl1X91AVJZBZBQOb1Ouz3yCvnM09x014fWtKb2Dt5dKBYTtQ7Ut8fRjmoOP7rSELNQ1UUkIS3kJkUznQFJ2ELMmhyPpbM0eZCyh0kKEjoA51FTW4C4ntK7DxzIDU35do1RRc2cpOeldriOxZCECyfdZA3E54ZD";
var authData = {
  "id": "114249639354533",
    "accessToken": accessToken,
    "expirationDate": "2018-02-09T10:11:20.680Z"
}



Parse.Cloud.run("logInWithFacebook", authData).then(function(token){

  let query = new Parse.Query('_Session')
  query.equalTo('sessionToken', token);
  query.include('user');
  console.log(query);
  query.first({useMasterKey: true}).then(function(session) {
     let user = session.get('user');
     console.log("rrrr");
  }, function(err) {
    console.log("ttttttttt")
    // something bad happened, not found etc...
  });

})
*/

//HOME PAGE
app.get('/', function(req, res) {
  res.render("index");
});

/*



//QUERIES FOR USERS

app.get('/friends', function(req, res) {
var query = new Parse.Query(User);

query.find({useMasterKey:true}, {

  success: function(User) {
    // The object was retrieved successfully.
console.log(User);

res.send(User);
},

error: function(object, error) {
  console.log(error);
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    res.send("bug")
  }
});
});


// QUERIES FOR EVENTS

app.get('/event', function(req, res) {

Parse.Cloud.run('findEvent', {radius: 99, startTime: "2017-12-14T13:30:00.000Z"}, User)
res.send("ok!")
});


//QUERY FOR MY EVENTS

app.get('/myevents', function(req, res) {
var userQuery = new Parse.Query("User");
var query = new Parse.Query("User");
userQuery.equalTo("objectId", "4oLzIAKYVL");

Parse.Cloud.run('getMyEvents', {user: results})
    res.send("ok!")

});

//QUERIES FOR MESSAGES

app.get('/message', function(req, res) {
var query = new Parse.Query(Message);

query.find( {

  success: function(Message) {
    // The object was retrieved successfully.
console.log(Message);
res.render("test");
},

error: function(object, error) {
  console.log(error);
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    res.send("bug")
  }
});
});

*/

app.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
