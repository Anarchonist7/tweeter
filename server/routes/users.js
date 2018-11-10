"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const usersRoutes  = express.Router();
var cookieKey;

module.exports = function(DataHelpers) {
  usersRoutes.post("/", function(req, res) {

    if (!req.body.username || !req.body.password) {
      res.status(400).json({ error: 'Username and password please!'});
      return;
    }
    const user = {
      username: req.body.username,
      password: req.body.password
    };

    DataHelpers.createUser(user, (err) => {
      cookieKey = '';

      for (var i = 0; i < 6; i++) {
        cookieKey += Math.ceil(Math.random() * 6);
      }
      req.session.user_id = cookieKey;

      res.status(201).send();
    });
  });
  return usersRoutes;
};