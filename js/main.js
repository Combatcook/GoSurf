$(function() {
    
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow">',
    asNavFor: '.slider-pagination',
  });

  $('.slider-pagination').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow">',
    asNavFor: '.slider-map',
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.surf-slider',
  });

});