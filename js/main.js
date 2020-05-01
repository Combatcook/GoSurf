$(function() {
    
  // sliders
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

  $('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="img/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.svg" alt="arrow">',
  });

  // for input-number
  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  // calculator
  $('.quantity-button').on('click', function(){
    var parents = $(this).parents('.holder-slider__info');
    var sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
    $('.sum', parents).html('$' + sum);
  });
    
  $('.quantity').each(function() {
    var parents = $(this).parents('.holder-slider__info');
    var sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
    $('.sum', parents).html('$' + sum);
  });

  // circles on surfboard
  $('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
  }); 

  // make slide active after clicking button "view surf"
  $('.surf-box__inner-btn').on('click', function() {
    let current = $('.slick-current');
    let slideClicked = $(this).parent().parent().parent().parent();
    let indexClicked = $(slideClicked).attr('data-slick-index') % 8;
    $(slideClicked).addClass('slick-current'); 
    $(current).removeClass('slick-current');

    $('.slider-map .slick-slide').each(function() {
      if ($(this).attr('data-slick-index') == indexClicked) {
        $(this).addClass('slick-current');
      }
    });

    $('.surf-slider').slick('slickGoTo', indexClicked);
  });

});