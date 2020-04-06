$(function() {
    
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow">',
    asNavFor: '.slider-pagination', 
    asNavFor: '.header__date',
  });

  $('.slider-pagination').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    asNavFor: '.header__date',
  });

  $('.header__date').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    infinite: true,
    fade: true,
    asNavFor: '.header__slider',
    asNavFor: '.slider-pagination',
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

  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow">',
  });

});