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
    $('#tweetCont').prepend($tweet);
  }
}

function loadTweets (first) {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function(data) {
      if (first) {
        renderTweets(data);
      } else {
        renderTweets([data[data.length - 1]]);
      }
    }
  });
}

$(document).ready(function () {
  loadTweets(true);

  $('.logo').on('click', function () {

    $('body').toggleClass('main2');
  });


  $('.buttonHolder').on('click', function () {
    $('.problem').hide();
    $('.new-tweet').slideToggle();
    $('#textPlace').select();
  });

  $('.register').on('click', function () {
    $('.new-register').slideToggle();
    $('.rname').select();
  });
});