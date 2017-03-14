var menu = (function () {

  //catche DOM
  var $footer;

  //bind events

  var init = function () {
    $footer = $('.footer');
    if ($footer.length > 0) {

      view();
    }
  };

  $(document).ready(function () {
    init();
  });

  var view = function () {
    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  };




})();