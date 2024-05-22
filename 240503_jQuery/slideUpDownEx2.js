$(function () {
  $('.box1').on('click', () => {
    $('.txt1').slideToggle();
    $('.txt2').slideUp();
    $('.txt3').slideUp();
    $('.txt4').slideUp();
  });
  $('.box2').on('click', () => {
    $('.txt2').slideToggle();
    $('.txt1').slideUp();
    $('.txt3').slideUp();
    $('.txt4').slideUp();
  });
  $('.box3').on('click', () => {
    $('.txt3').slideToggle();
    $('.txt1').slideUp();
    $('.txt2').slideUp();
    $('.txt4').slideUp();
  });
  $('.box4').on('click', () => {
    $('.txt4').slideToggle();
    $('.txt1').slideUp();
    $('.txt2').slideUp();
    $('.txt3').slideUp();
  });

});