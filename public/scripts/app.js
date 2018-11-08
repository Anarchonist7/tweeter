function createTweetElement(obj) {
  //finds how many days since post
  var date = new Date().getTime();
  var days = Math.round((((date - obj.created_at)) / 1000 / 60) / (24 * 60));
  //creates elements
  var $tweet = $('<article>').addClass('tweet');
  var $tweetDiv = $('<div>').addClass('tweetDiv');
  var $image = $('<img>').attr('src', obj.user.avatars.regular);
  var $nameCont = $('<div>').addClass('name');
  var $name = $('<b>').text(obj.user.name);
  var $handle = $('<div>').addClass('at').text(obj.user.handle);
  var $content = $('<div>').addClass('content').text(obj.content.text);
  var $footer = $('<div>').addClass('footer').text(days + ' days ago');
  var $flag = $('<i>').addClass('icon fas fa-flag');
  var $retweet = $('<i>').addClass('icon fas fa-retweet');
  var $heart = $('<i>').addClass('icon fas fa-heart');
  //appends elements
  $tweet.append($tweetDiv);
  $tweetDiv.append($image).append($nameCont);
  $nameCont.append($name).append($handle);
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

function renderTweet(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    if (i === tweets.length - 1) {
      $('#tweetCont').append(createTweetElement(tweets[i]));
    }
  }
}

function loadTweets () {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function(data) {
      console.log('wohohoh my data is hmya: ', data);
      renderTweets(data);
    }
  });
}

function loadTweet () {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function(data) {
      console.log('wohohoh my data is hmya: ', data);
      renderTweet(data);
    }
  });
}

$(document).ready(function () {
  loadTweets();

  $('#compose').on('click', function () {
    $('.new-tweet').slideToggle();
    $('#textPlace').select();
  });
});