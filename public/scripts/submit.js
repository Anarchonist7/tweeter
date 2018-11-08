$(document).ready(function() {
  console.log('here is jonny');
  var $button = $('#countMe');
  $button.on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    console.log('Buttaro clickeroood, performing ajax call...');

    if ($('#textPlace').val().length > 140) {
      $('.problem').text('Too long!').slideDown(100);
    } else if ($('#textPlace').val().length < 1) {
      $('.problem').text('Tweet empty!').slideDown(100);
    } else {
      $('.counter').html('140');
      $('.problem').hide();
      console.log('success, tweet being submitted...');
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $form.serialize(),
        success: function () {
          loadTweets(false);
        }
      });
      $('#textPlace').val('');
    }
  });
});
