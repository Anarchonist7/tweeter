$(document).ready(function() {
  var $btton = $('#reg');
  $btton.on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    console.log('Buttonni clickeroood, performing ajax call...');
    $('.new-register').hide();
    $('.register').hide();
    console.log("seabiscuit!", $form.serialize());
    $.ajax({
      type: 'POST',
      url: '/users',
      data: $form.serialize(),
      success: function () {
        console.log('why am i not logged?');
      }
    });
  });
});