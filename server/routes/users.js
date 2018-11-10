"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const usersRoutes  = express.Router();

module.exports = function(DataHelpers) {
  // console.log('we are in users 1');
  usersRoutes.post("/", function(req, res) {
    console.log('we are in users 2');
    if (!req.body.username || !req.body.password) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    console.log('body: ', req.body.username);
    const user = {
      username: req.body.username,
      password: req.body.password
    };
    console.log('user: ', user);
    DataHelpers.createUser(user, (err) => {
      console.log('IM INSIDE the createuser callback');
      console.log('error: ', err);

      res.status(201).send();
    });
  });
  return usersRoutes;
};