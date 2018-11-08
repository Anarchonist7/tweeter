var maxChars = 140;

$(document).ready(function() {
  console.log('I am being loaded into the index.html file directly!');
  $('#countMe').on('keyup', function() {

    var current = $('textarea', this).val().length;
    var spanColor = 'black';

    if (current > 140){
      spanColor = 'red';
    }

    $('span', this)
      .html(maxChars - current)
      .css('color', spanColor);
  });
});

function chars() {
  var length = $('.textPlace').val().length;
  if (length > 140) {
    return 'big';
  } else if (length < 1) {
    return 'small';
  } else {
    return 'good';
  }
}