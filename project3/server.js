//authentication imports
const express = require("express");
<<<<<<< HEAD
const jwt = require("express-jwt");
const jwks - require("jwks-rsa");
const path = require("path");
const config = require("./config")
const router = express.Router();

=======
// const keys = requi re("./keys");
>>>>>>> 9031c7e27d8f9abed27f2253d6233cc5f2d01940
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
//======================================================================//
//scratched the old code, will be using auth0



//======================================================================//

=======
>>>>>>> 9031c7e27d8f9abed27f2253d6233cc5f2d01940
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