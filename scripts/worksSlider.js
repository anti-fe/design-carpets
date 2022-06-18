const worksSlider = new Swiper('.works__slider', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false,
    grabCursor: true,
    createElements: true,
    breakpointsBase: 'container',
    allowTouchMove: true,
    preventClicks: true,
    setWrapperSize: true,
    autoHeight: true,
    
    breakpoints: {
      // when window width is >= 320px
      1: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      dragSize: '100px',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});

export default worksSlider;