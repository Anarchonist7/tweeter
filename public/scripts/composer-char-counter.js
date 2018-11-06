var count = 140;

$(document).ready(function() {
  console.log('I am being loaded into the index.html file directly!');
  $('#countMe').on('keyup', function() {

    let current = $('#textPlace').val().length;
    console.log(current);
    let chars = count - current;
    $('.counter').html(chars);

    if (current > 140) {
      $('.counter').css('color', 'red');
    }

    if (current <= 140) {
      $('.counter').css('color', 'black');
    }
  });
});