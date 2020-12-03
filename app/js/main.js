$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav',
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    dots: false,
    focusOnSelect: true,
  });
});
