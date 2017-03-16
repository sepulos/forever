var menu = (function () {

  //catche DOM
  var $baner;
  var $yellow;
  var $text;
  var $btn;

  //bind events

  var init = function () {
    $baner = $('.baner');
    if ($baner.length > 0) {
      $yellow = $baner.find('.baner__yellow');
      $text = $baner.find('.baner__text');
      $btn = $baner.find('.baner__btn');

      view();
    }
  };

  $(document).ready(function () {
    init();
  });


  var view = function () {
    var vieww = inView('.baner').once('enter', function () {
        animater();
    });
  };


  var animater = function () {
    $yellow.fadeIn(2000).css({
      background: '#fce300'
    });
    $text.fadeIn(2000);
    $btn.fadeIn(2500);
  };



})();