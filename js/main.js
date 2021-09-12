$(function(){
    $('.fairy-tail-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/icons/back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/icons/next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                arrows: false
              }
            },
          ]
    });

    $('.our-trip-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/icons/back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/icons/next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false
              }
            },
          ]
    });
});