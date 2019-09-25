var appMaster = {
 
  smoothScroll: function () {
    // Smooth Scrolling
    $('a[href]:not([href="#carousel-example-generic"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  },

  animateScript: function () {
    $('.scrollpoint.sp-effect1').waypoint(function () {
      //$(this).toggleClass('active');
      $(this).toggleClass('animated fadeInLeft');
    }, {offset: '100%'});
    $('.scrollpoint.sp-effect2').waypoint(function () {
      //$(this).toggleClass('active');
      $(this).toggleClass('animated fadeInRight');
    }, {offset: '100%'});
    $('.scrollpoint.sp-effect3').waypoint(function () {
      //$(this).toggleClass('active');
      $(this).toggleClass('animated fadeInDown');
    }, {offset: '100%'});
    $('.scrollpoint.sp-effect4').waypoint(function () {
      //$(this).toggleClass('active');
      $(this).toggleClass('animated fadeIn');
    }, {offset: '100%'});
    $('.scrollpoint.sp-effect5').waypoint(function () {
      //$(this).toggleClass('active');
      $(this).toggleClass('animated fadeInUp');
    }, {offset: '100%'});
  },

  scrollMenu: function () {
    var num = 50; //number of pixels before modifying styles
    if ($(window).scrollTop() > num) {
      $('nav').addClass('scrolled');
    }
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
        $('nav').addClass('scrolled');

      } else {
        $('nav').removeClass('scrolled');
      }
    });

    $('ul.navbar-nav li a').bind('click', function () {
      if ($(this).closest('.navbar-collapse').hasClass('in')) {
        $(this).closest('.navbar-collapse').removeClass('in');
      }
    });
  }
};

export default function () {
  appMaster.smoothScroll();
  appMaster.animateScript();
  appMaster.scrollMenu();
};