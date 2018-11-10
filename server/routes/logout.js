"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const logoutRoute  = express.Router();

module.exports = function() {
  logoutRoute.post("/", function(req, res) {
    req.session = null;
    res.status(201).send();
  });
  return logoutRoute;
};