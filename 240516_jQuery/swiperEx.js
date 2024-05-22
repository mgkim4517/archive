const mainSwiper = new Swiper(".main-swiper", {
  speed: 600,
  loop: true,
  parallax: true, // 시간차 움직임
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".main-page-no",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const subSwiper = new Swiper(".sub-swiper", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".sub-page-no",
    clickable: true,
  },
});