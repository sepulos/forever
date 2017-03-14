var menu = (function () {

  //catche DOM
  var $menu;
  var $nav;
  var $bars;

  //bind events

  var init = function () {
    $menu = $('.menu');
    if ($menu.length > 0) {
      $nav = $menu.find('.menu__nav');
      $bars = $menu.find('.menu__bars');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });


  var bindEvents = function () {
    menuDisplay();
    menuClick();
    scroll();
  };

  var menuDisplay = function () {
    $( window ).resize(function () {
      menuResize();
    });
  };

  var scroll = function () {
    $menu.sticky({topSpacing:0, zIndex:10});
  };

  var menuResize = function () {
    if ($( window ).width() >= 812) {
      $nav.show();
      $bars.hide();
    }
    else {
      $nav.hide();
      $bars.show();
    }
  };

  var menuClick = function () {

    $bars.on('click', function () {
      menuToggle();
    });

  };

  var menuToggle = function () {
    $nav.slideToggle(300);
  };


})();