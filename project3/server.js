const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const User = require("../models/user-model");


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


//Log in Passport for New Users
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});



passport.use(
  new GoogleStrategy({
      //options for google strategy
      callbackURL: "/auth/google/callback",
      clientID: keys.google.clientID, 
      clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
      //check if user already exists in db
      User.findOne({googleId: profile.id}).then((currentUser) => {
          if (currentUser) {
              //user exists
              console.log("user is: ", currentUser);
              done(null, currentUser);
          } else {
              //if not, create user in db
              new User({
                  username: profile.displayName,
                  googleId: profile.id,
                  thumbnail: profile._json.image.url

              }).save().then((newUser) => {
                  console.log("new user created: " + newUser);
                  done(null, newUser);
              });
          }
      });
      
  })
)
//Log in Passport end of code

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sneakerroom"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
