/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(obj) {
  //finds how many days since post
  var date = new Date();
  date = date.getTime();
  var millis = date - obj.created_at;
  var seconds = millis / 1000;
  var mins = seconds / 60;
  var minPerDay = 24 * 60;
  var days = Math.ceil(mins / minPerDay);
  //creates elements
  var $tweet = $('<article>').addClass('tweet');
  var $tweetDiv = $('<div>').addClass('tweetDiv');
  var $image = $('<img>').attr('src', obj.user.avatars.regular);
  var $name = $('<div>').addClass('name');
  var $b = $('<b>').html(obj.user.name);
  var $at = $('<div>').addClass('at').html(obj.user.handle);
  var $content = $('<div>').addClass('content').html(obj.content.text);
  var $footer = $('<div>').addClass('footer').html(days + ' days ago');
  var $flag = $('<i>').addClass('icon fas fa-flag');
  var $retweet = $('<i>').addClass('icon fas fa-retweet');
  var $heart = $('<i>').addClass('icon fas fa-heart');
  //appends elements
  $tweet.append($tweetDiv);
  $tweetDiv.append($image).append($name);
  $name.append($b).append($at);
  $tweet.append($content).append($footer);
  $footer.append($flag).append($retweet).append($heart);

  return $tweet;
}

function renderTweets(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    var $tweet = createTweetElement(tweets[i]);
    $('#tweetCont').append($tweet);
  }
}

$(document).ready(function () {
  renderTweets(data);
});