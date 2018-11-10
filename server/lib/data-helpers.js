"use strict";


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

      db.collection('tweets').insertOne(newTweet);
      callback(null, true);

    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
      });
    },
    //ideally x.x saves a user to 'db'
    createUser: function(newUser, callback) {
      console.log('new user: ', newUser);
      console.log(db.collection('users'));
      db.collection('users').insertOne(newUser);


      callback(null, true);
    }
  };
};
