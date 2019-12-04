$('.main-banner-content__descuentos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  
  
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    $('.nav-top__header').addClass('nav-top__header--detele');
    // $("#iso").addClass('img-size').attr('src', 'assets/img/logo-white.jpg').removeClass('scroll-up');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $('.nav-link').removeClass('fixed-color');
    $('.nav-top__header').removeClass('nav-top__header--detele');
    // $("#iso").removeClass('img-size').attr('src', 'assets/img/logo-fvr.jpg').removeClass('scroll-up');

  }
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  centerMode: true,
  focusOnSelect: true

});
$('.main-banner-content__opciones').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  
  
  autoplaySpeed: 2000,
  dots: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });