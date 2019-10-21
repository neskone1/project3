//authentication imports
const express = require("express");
const jwt = require("express-jwt");
const jwks - require("jwks-rsa");
const path = require("path");
const config = require("./config")
const router = express.Router();

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//======================================================================//
//scratched the old code, will be using auth0

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${reb2039607.auth0.com}/.well-known/jwks.json`

  }),

    audience: [config.AUDIENCE],
    issuer: `https://${reb2039607.auth0.com}`,
    algorithm: "RS256"

});




//======================================================================//