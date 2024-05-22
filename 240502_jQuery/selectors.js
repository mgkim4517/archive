/* 
  jQuery 기본 구조
  $('대상').method();

  https://api.jquery.com/category/selectors
  jQuery('*'); 제이쿼리 방식으로 전체 선택자를 탐색
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래식 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫 번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색 (주로 걸러냄)
*/

/*
문서 준비 이벤트
JS ver. ->
window.onload = function () {}
document.addEventListener('DOMContentLoaded', function () {});

jQuery ver. ->
$(document).ready(function () {});
*/

$(document).ready(function () {
  // == Js ver. : .style
  // $().css('속성');
  // $().css('속성', '값');
  // $().css({'속성' : '값', '속성' : '값', '속성' : '값'});
  $('body').css('background-color', '#F0EBE3');
  $('body *').css({ 'border' : '3px solid #000', 'padding' : '10px', 'margin' : 10 }); // 단위를 붙이지 않을 경우 자바스크립트의 기본 단위 10으로 적용됨

  $('a').parent(); // a의 1촌 부모를 탐색
  const item = $('a').parent();
  console.log($('a').parent());
  // method chaining : 여러 개의 메서드 연결하는 방식
  $('a').parent().css({'border-color' : '#FF9494'});

  // $('a').parents().css({'border-style' : 'dashed'}); 매개변수를 지정하지 않으면 a의 상위 노드 모두를 탐색. 즉 body, html 탐색.
  $('a').parents('#wrapper').css({'border-style' : 'dashed'});

  $('.container').children(); // 자식 노드 탐색. 매개변수를 지정하지 않으면 같은 라인의 모든 자식 노드 탐색
  // $('.container').children().css({ borderColor : '#3F72AF' }); 1촌 관계의 자식만 적용
  $('.container').children('h1').css({ borderColor : '#3F72AF' }); // 자바스크립트 태그는 인용부호 생략 가능. 값은 인용부호 사용해야 함

  $('li.part').siblings(); // 2촌 관계 탐색. li.part의 형제 탐색
  $('li.part').siblings().css({backgroundColor : '#D3E4CD'});
  // li.part의 형제의 제일 마지막 형제의 자식인 a에게 display: block
  $('li.part').siblings('li:last-child').children().css({ display : 'block' });

  // .first(); 첫 번째 탐색한 노드 반환
  //  제일 마지막 li의 첫 번째 a
  $('li.part').siblings().last().children().first().css({ 'border-style' : 'dotted', textDecoration : 'none', color : '#EA5455'})

  $('.p2').prev(); // .p의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({ backgroundColor : '#FAEAB1' });

  $('.p2').next(); // .p2의 뒤에 작성된 형제 노드 탐색
  $('.p2').next().css({ borderWidth : 10 });

  $('.p2').prevAll(); // .p2의 앞에 작성된 형제 노드 *모두* 탐색
  $('.p2').prevAll().css({ borderWidth: 6 , borderColor : '#FEA82F'});


  // .find(); 하위 노드 탐색. 반드시 *매개변수* 필요
  // $('#header').siblings('ul').children('li').last().children().last().css();
  $('#header').siblings('ul').find('a:last-child').css({ backgroundColor : '#F0D9FF' , textDecoration : 'none', color : 'deeppink' })

  $('#header').find('p').css({ backgroundColor : '#102C57' , color : '#fff'});
  
  $('.part').filter('ul'); // .part 중 ul 거르겠다
  $('.part').filter('ul').css({ borderColor : '#B8B0B0' });
  $('.part').filter('li').css({ listStyle : 'none' });

  $('.container :odd').css({ fontStyle : 'italic'});
  });