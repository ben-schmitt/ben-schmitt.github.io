$(window).scroll(function() {
    if ($(this).scrollTop() > 30) { // Adjust this value to determine when the header should start moving
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });