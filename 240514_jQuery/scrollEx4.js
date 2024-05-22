// 로고 클릭 시 맨 위로 이동
$('.title strong').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// 스크롤에 따른 header 변화
addEventListener('scroll', () => {})
$(window).on('scroll', () => {
  const box1 = $('.box1').offset().top;
  console.log(box1);
  // const article = document.querySelector('article').offsetHeight;
  const headerHt = $('header').outerHeight(); // margin을 제외한 요소의 실제 크기
  console.log(headerHt);
  console.log($('header').height());

  if(scrollY > box1) {
    $('header').addClass('active');
    $('article').css({ height : `calc(100vh - ${headerHt}px)` });
    // $('.global-menu').css({top : 80});
  } else {
    $('header').removeClass('active');
    // $('.global-menu').css({top : 100});
    $('article').css({ height : `calc(100vh - ${headerHt}px)` });
  }
});

// 해당 박스로 부드러운 이동
/*
$('.global-menu li:nth-child(1) a').on('click', (e) => {
  e.preventDefault();

  scrollTo({
    top: $('.box1').offset().top - $('header').height(),
    behavior: 'smooth'
  })
});

여러 요소의 순회
JS :
array.forEach(elem => {});
[a[0], a[1], a[2], a[3]].forEach(a => {});

jQuery :
$.each(배열 혹은 객체(상황에 따라 생략 가능), 콜백함수);
배열인 경우 인덱스, 값 순서로 인자를 받음
$.each((index, value) => {});
*/

$('.global-menu a').each(function(idx, elem) {
  // console.log(`index: ${idx}, value: ${elem}`);
  $(elem).on('click', (e) => {
    e.preventDefalut();

    const getArticle = $('article').eq(idx).offset().top - $('header').height()
    scrollTo({
      top: getArticle,
      behavior: 'smooth'
    });
  });
});

//   scrollTo({
//     top: $('.box1').offset().top - $('header').height(),
//     behavior: 'smooth'
//   })
// });

// 모바일 토글 버튼
$('.mobile-button').on('click', (e) => {
  $(e.target).toggleClass('toggle-btn');
  $('.global-menu').toggleClass('show-menu');

  $('.global-menu li').each( (index, li) => {
    $(li).on('click', () => {
      $('.mobile-button').removeClass('toggle-btn');
      $('.global-menu').removeClass('show-menu');
    });
  });

});