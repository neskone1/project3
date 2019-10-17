const express = require("express");
const authRoutes = require("../../routes/auth-routes");
const profileRoutes = require("../../routes/profile-routes");
const app = express();
const passportSetup = require("../../config/passport-setup");
const mongoose = require("mongoose");
const keys = require("../../config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");


//set up view engine
app.set("view engine", "ejs");

app.use(cookieSession({
    maxAge: 24 * 60 *60 * 1000, //one day in milliseconds
    keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log("connected to mongodb");
})

//set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

//create home route
app.get("/", (req, res) => {
res.render("home", { user: req.user });
});

app.listen(3000, () => {
    console.log("App now listening for requests on port 3000");
});
