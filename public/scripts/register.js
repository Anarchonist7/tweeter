$(document).ready(function() {
  var $btton = $('#reg');
  $btton.on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    console.log('Buttonni clickeroood, performing ajax call...');
    $('.new-register').hide();
    $.ajax({
      type: 'POST',
      url: '/users',
      data: $form.serialize(),
      success: function () {
        $('.register').hide();
        $('.logout').show();
        $('.buttonHolder').show();
        $('.loginHolder').hide();
        $('#compose').show();
        $('#login').hide();

      }
    });
  });

  var $logBTN = $('.logout');
  $logBTN.on('click', function (event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/logout',
      success: function () {
        $('.logout').hide();
        $('.register').show();
        $('#compose').hide();
        $('.buttonHolder').hide();
        $('.loginHolder').show();
        $('#login').show();
      }
    });






  });
});