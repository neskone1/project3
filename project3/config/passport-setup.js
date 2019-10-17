const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const User = require("../models/user-model");


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
