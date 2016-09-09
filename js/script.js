$(document).ready(function(){ // когда DOM будет готов
  // Gallery
  $('#gallery__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        accessibility: false,
        asNavFor: '#gallery__bottom',
    });
    $('#gallery__bottom').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#gallery__top',
        dots: false,
        centerMode: true,
        accessibility: false,
        arrows: false,
        focusOnSelect: true
    });


  $('#offers').owlCarousel({
    items: 1,
    loop: true,
    gots: true,
  });

  //page single-room
  $('#room-block-gallery').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });

  $('#room-block-gallery a').fancybox();


// Main nav
  $('.burger').on('click', function(){
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $('#menu').slideUp('normal');
    }
    else {
      $(this).addClass('active');
      $('#menu').slideDown('normal');
    }
  });


// Tabs
  $('.rest-tabs__switcher-item').on('click', function(e){
    e.preventDefault();
  });

  $('#slide01').addClass('content-active');
  $('#slide01-bottom').addClass('content-active');
  var tabs = $('.rest-tabs__switcher-item');
  var topContent = $('.tab-top__item');
  var bottomContent = $('.tab-bottom__item');

  function changeTab(e) {
    for (var i = 0, j = tabs.length; i < j; i++) {
      tabs[i].classList.remove('active');
    }

    this.classList.add('active');

    var link = this.getAttribute('href');
    var linkcont = document.querySelector(link);
    var linkcontB = document.querySelector(link+'-bottom');

    for (i = 0, j = tabs.length; i < j; i++) {
      topContent[i].classList.remove('content-active');
      bottomContent[i].classList.remove('content-active');
    }
    linkcont.classList.add('content-active');
    linkcontB.classList.add('content-active');
    }

  for (var i = 0, j = tabs.length; i < j; i++) {
    tabs[i].addEventListener('click', changeTab);
  }

});


$(window).resize(function(){
  if(window.matchMedia('(min-width: 1199px)').matches) {
    $('#menu').css("display","none");
    $(".burger").removeClass('active');
   }

});