"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const usersRoutes  = express.Router();

module.exports = function(DataHelpers) {
  usersRoutes.post("/", function(req, res) {

    if (!req.body.username || !req.body.password) {
      res.status(400).json({ error: 'Username and password please!'});
      return;
    }

    console.log('body: ', req.body.username);
    const user = {
      username: req.body.username,
      password: req.body.password
    };
    console.log('user: ', user);
    DataHelpers.createUser(user, (err) => {
      var randomString = '';

      for (var i = 0; i < 6; i++) {
        randomString += Math.ceil(Math.random() * 6);
      }
      req.session.user_id = randomString;
      console.log('IM INSIDE the createuser callback');
      console.log('error: ', err);

      res.status(201).send();
    });
  });
  return usersRoutes;
};