$(document).ready(function () {
  $('.why-choose-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
  });

  if ($(window).width() < 1024) {
    $('.menu-bars').click(function () {
      $('.header-nav').toggleClass('header-nav-toggle');
      $('.menu-bars-close').toggleClass('menu-bars-close--toggle');
    });

    $('.menu-bars-close').click(function () {
      $('.header-nav').removeClass('header-nav-toggle');
      $('.menu-bars-close').removeClass('menu-bars-close--toggle');
    });
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 80) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 81) {
        $('.header').removeClass('stuck');
      }
    });
  }
  if ($(window).width() > 1024) {
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 170) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.header').removeClass('stuck');
      }
    });
  }
  // var $grid = $('.customer-list').isotope({
  //   itemSelector: '.customer-item',
  //   percentPosition: true,
  // });
  var itemSelector = '.customer-item';

  var $grid = $('.customer-list').isotope({
    itemSelector: itemSelector,
    masonry: {
      columnWidth: itemSelector,
      isFitWidth: true,
    },
  });
  $('.customer-nav li a').click(function (e) {
    var filterValue = $(this).attr('data-filter');
    $('.customer-nav li.active').removeClass('active');
    $(this).parent().addClass('active');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
    e.preventDefault();
  });
  
  $('.abount-us2 .slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
  });
});
