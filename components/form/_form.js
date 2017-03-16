var menu = (function () {

  //catche DOM
  var $form;
  var $yellow;
  var $btn;
  var $btnS;

  //bind events

  var init = function () {
    $form = $('.form');
    if ($form.length > 0) {
      $yellow = $form.find('.form__yellow');
      $btn = $form.find('.form__btn');
      $btnS = $form.find('.form__btn.-small');

      view();
    }
  };

  $(document).ready(function () {
    init();
  });


  var view = function () {
    var vieww = inView('.form__yellow').once('enter', function () {
        animater();
    });
  };


  var animater = function () {
    var spanWidth = $($yellow).width();
    $yellow.css({
      background: '#fce300',
      color: 'black'
    });
  };



})();