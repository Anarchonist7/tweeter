/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = {
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
};

function createTweetElement(obj) {
  //creates all elements
  var date = new Date();
  date = date.getTime();
  var millis = date - obj.created_at;
  var seconds = millis / 1000;
  var mins = seconds / 60;
  var minPerDay = 24 * 60;
  var days = Math.ceil(mins / minPerDay);
  console.log(days + ' days ago');
  var $tweet = $('<article>').addClass('tweet');
  var $tweetDiv = $('<div>').addClass('tweetDiv');
  var $image = $('<img>').attr('src', obj.user.avatars.regular);
  var $name = $('<div>').addClass('name');
  var $b = $('<b>').html(obj.user.name);
  var $at = $('<div>').addClass('at');
  $at.html(obj.user.handle);
  var $content = $('<div>').addClass('content');
  $content.html(obj.content.text);
  var $footer = $('<div>').addClass('footer');
  $footer.html(days + ' days ago');
  var $flag = $('<i>').addClass('icon fas fa-flag');
  var $retweet = $('<i>').addClass('icon fas fa-retweet');
  var $heart = $('<i>').addClass('icon fas fa-heart');
  //appends all elements
  $tweet.append($tweetDiv);
  $tweetDiv.append($image);
  $tweetDiv.append($name);
  $name.append($b);
  $name.append($at);
  $tweet.append($content);
  $tweet.append($footer);
  $footer.append($flag);
  $footer.append($retweet);
  $footer.append($heart);

  return $tweet;
}
$(document).ready(function () {
  var $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweetCont').append($tweet);
});

