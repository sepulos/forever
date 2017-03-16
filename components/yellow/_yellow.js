var menu = (function () {

  //catche DOM
  var $yellow;
  var $text;

  //bind events

  var init = function () {
    $yellow = $('.yellow');
    if ($yellow.length > 0) {
      $text = $yellow.find('.yellow__text');

      view();
    }
  };

  $(document).ready(function () {
    init();
  });


  var view = function () {
    var vieww = inView('.yellow').once('enter', function () {
        animater();
    });
  };


  var animater = function () {
    var spanWidth = $($yellow).width();
    $text.css({
      color: 'black'
    });
  };



})();