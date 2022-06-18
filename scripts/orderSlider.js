const orderSlider = new Swiper(".order__slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    createElements: true,
    breakpointsBase: 'container',
    allowTouchMove: true,
    preventClicks: true,
    setWrapperSize: true,
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});

export default orderSlider;