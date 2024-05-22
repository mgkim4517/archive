// $('.toggle-btn').on('click', (e) => {
//   $(e.target).next('.toggle-contents').slideToggle().parent().siblings().find('.toggle-contents').slideUp();
// });


// 토글 버튼 .toggle-btn을 클릭했을 때, .toggle-btn이 열리면 toggle-contents가 보이며 이미지 .toggle-open, .toggle-btn이 닫히면 toggle-contents가 보이지 않으며 이미지 .toggle-close

// $(".toggle-btn").click(function() {
//   // 클릭한 토글 버튼의 부모 요소를 찾음
//   var parent = $(this).closest(".toggle-btn");
//   // 클릭한 토글 버튼의 toggle-contents를 찾음
//   var contents = parent.find(".toggle-contents");

//   // 다른 토글 메뉴를 닫음
//   $(".toggle-contents").not(contents).slideUp(); // 다른 토글 메뉴 닫기

//   // toggle-contents 요소의 현재 표시 상태를 확인
//   var isContentsVisible = contents.is(":visible");

//   // 표시 상태를 변경
//   if (!isContentsVisible) {
//     // toggle-contents가 숨겨져 있을 때
//     contents.slideDown(); // 보이게 함
//     parent.find(".toggle-close").hide(); // toggle-close 이미지 숨김
//     parent.find(".toggle-open").show(); // toggle-open 이미지 표시
//   } else {
//     // toggle-contents가 보여져 있을 때
//     contents.slideUp(); // 숨김
//     parent.find(".toggle-close").show(); // toggle-close 이미지 표시
//     parent.find(".toggle-open").hide(); // toggle-open 이미지 숨김
//   }
// });

// .info-toggle을 눌렀을 경우 클릭한 .info-toggle의 다음 .toggle-contents가 보이고 .test-btn.open 클래스가 붙음 클릭하지 않은 .info-toggle의 다음 .toggle-contents는 닫힘

// $('.info-toggle').on('click', (e) => {
//   $(e.target).next('.toggle-contents').slideToggle().
// });

// $('.toggle-btn').eq(0).children('.info-toggle').on('click', () => {
//   $('.toggle-btn').eq(0).children('.toggle-contents').slideToggle();
//   $('.toggle-btn').eq(1).children('.toggle-contents').slideUp();
//   $('.toggle-btn').eq(2).children('.toggle-contents').slideUp();
// });

// info-box의 info-toggle을 클릭 시 .info-toggle.open 태그가 붙고 해당 .info-toggle의 다음 .toggle-contents가 보임 클릭하지 않은 .info-toggle의 .toggle-contents는 자동으로 닫힘 한 번 더 클릭 시 .info-toggle의 open 클래스가 제거됨

$('.toggle-btn').on('click', (e) => {
  $(e.target).next('.toggle-contents').slideToggle().parent().siblings().find('.toggle-contents').slideUp();
});