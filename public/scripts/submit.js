

$(document).ready(function() {
  console.log('here is jonny');
  var $button = $('#countMe');
  $button.on('submit', function (event) {
    event.preventDefault();

    const $form = $(this);
    console.log('Buttaro clickeroood, performing ajax call...');


    if ($('#textPlace').val().length > 140) {
      alert('Your tweet is too long!');
    } else if ($('#textPlace').val().length < 1) {
      alert('Your tweet is empty!');
    } else {
      console.log('success, tweet being submitted...');
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $form.serialize(),
        success: function () {
          loadTweets();
        }


      });
    }
    // $.ajax({
    //   type: 'POST',
    //   url: '/tweets',
    //   data: $form.serialize()

    // });
//.then(() => {
    //     var $tweet = createTweetElement(tweets[i]);
    // $('#tweetCont').prepend($tweet);


    // $.ajax('/tweets', { method: 'POST' })
    // .then(function( data ) {
    //   console.log('this is the data: ', data);
    //   alert( "Load was performed." );
    // });

    // $.ajax('http://localhost:8080/', { method: 'GET' })
    //   .then(function (data) {
    //     console.log('Hola hola holamigo! ', data);
    //     $('#tweetCont').append(data);
    //   });

  });
});
