var gallery = (function () {

  //catche DOM
  var $galleryBox;
  var $item;
  var $area;

  //bind events


  var init = function () {
    var $gallery = $('.gallery');
    if ($gallery.length > 0) {
      $galleryBox = $gallery.find('.gallery__box');
      $item = $gallery.find('.gallery__boxItem');
      $area = $gallery.find('.gallery__area');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    lightBox();
    slickGallery();
  };


  var lightBox = function () {
    $galleryBox.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

  var slickGallery = function () {
    $galleryBox.waitForImages(function () {
      $galleryBox.slick({
        infinite: true,
        selector: $item,
        dots: true,
        dotsClass: 'gallery__dots',
        appendDots: $area,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };
})();
