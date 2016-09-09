$(document).ready(function(){ // когда DOM будет готов
  if(window.matchMedia('(min-width: 1200px)').matches) {
    $('#reviews').owlCarousel({
      items: 2,
      loop: true,
      nav: true,
      slideBy: 2,
    });
  };

  if(window.matchMedia('(max-width: 1199px)').matches) {
    $('.reviews').addClass('reviews--tablet');
  };

  if(window.matchMedia('(max-width: 767px)').matches) {
    $('.reviews').addClass('reviews--mob');
  };


//Reviews
  var clicks = 2;
  $('#reviews-btn').on('click', function(e){
    e.preventDefault();
    if( (clicks % 2) == 0 ){
      $('#reviews').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $('#reviews').find('.owl-stage-outer').children().unwrap();
      $('.reviews').removeClass('reviews--mob');
      $('.reviews').removeClass('reviews--tablet');
    }
    else {
      if(window.matchMedia('(max-width: 767px)').matches) {
        $('.reviews').addClass('reviews--mob');
      }
      else {
        if(window.matchMedia('(max-width: 1199px)').matches) {
          $('.reviews').addClass('reviews--tablet');
        }
        else {
          $('#reviews').owlCarousel({
            items: 2,
            loop: true,
            nav: true,
          });
        }
      }
    }
    ++clicks;
  });
});


$(window).resize(function(){
  if(window.matchMedia('(max-width: 767px)').matches) {
    $('.reviews').removeClass('reviews--tablet');
    $('.reviews').addClass('reviews--mob');
  }
  else {
    if(window.matchMedia('(max-width: 1199px)').matches) {
      $('#reviews').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      $('#reviews').find('.owl-stage-outer').children().unwrap();
      $('.reviews').removeClass('reviews--mob');
      $('.reviews').addClass('reviews--tablet');
    }
    else {
      $('#reviews').owlCarousel({
        items: 2,
        loop: true,
        nav: true,
      });
    }
  }
});



