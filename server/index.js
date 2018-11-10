"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const cookieSession = require('cookie-session');
// const bcrypt = require('bcrypt');
var userKey;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['Key!']
}));

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';
const datahelperslib = require("./lib/data-helpers.js");
const tweetsRouteslib = require("./routes/tweets");
const usersRouteslib = require('./routes/users');
MongoClient.connect(MONGODB_URI, (err, db) => {

  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  const DataHelpers = datahelperslib(db);
  const tweetsRoutes = tweetsRouteslib(DataHelpers);
  const usersRoutes = usersRouteslib(DataHelpers);

  app.use("/tweets", tweetsRoutes);
  app.use('/users', usersRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});


