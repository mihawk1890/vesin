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
        $('.top-bar').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.top-bar').removeClass('stuck');
      }
    });
  }

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
  });  var sync1 = $("#sync1");
 
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false, 
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        "<i class='fa fa-angle-left  '></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
  }).on('changed.owl.carousel', syncPosition);

  $("#sync2")
      .on('initialized.owl.carousel', function() {
        $("#sync2").find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: true,
          nav: true,
          margin:10,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }

      //end block

      $("#sync2")
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = $("#sync2").find('.owl-item.active').length - 1;
      var start = $("#sync2").find('.owl-item.active').first().index();
      var end = $("#sync2").find('.owl-item.active').last().index();

      if (current > end) {
        $("#sync2").data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        $("#sync2").data('owl.carousel').to(current - onscreen, 100, true);
      }
  }

  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
      }
  }

  $("#sync2").on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  });
});
