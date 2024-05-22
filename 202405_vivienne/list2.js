// header

// 내비게이션 메뉴 눌렀을 때
$('.menu').on('click', () => {
  $('.close').addClass('nav-on');
  $('.global-menu').addClass('active');
  $('.main-menu').addClass('active');
});

$('.close').on('click', () => {
  $('.close').removeClass('nav-on');
  $('.global-menu').removeClass('active');
  $('.main-menu').removeClass('active');
})