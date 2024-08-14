var swiper = new Swiper(".mySwiper", {
  loop : true,
  cssMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: false,
  keyboard: true,
});

