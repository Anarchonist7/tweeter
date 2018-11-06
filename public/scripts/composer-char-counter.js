var count = 140;

$(document).ready(function() {
  console.log('I am being loaded into the index.html file directly!');
  $('#countMe').on('keyup', function() {
    let current = $('textarea', this).val().length;
    // var $counter = $('span', this).html(count - current);
    var spanColor = 'black';
    if(current >= 140){
      spanColor = 'red';
    }

    $('span', this)
      .html(count - current)
      .css('color', spanColor);
    // if (current > 140) {
    //   $('span', this).css('color', 'red');
    // }

    // if (current <= 140) {
    //   $('span', this).css('color', 'black');
    // }
  });
});