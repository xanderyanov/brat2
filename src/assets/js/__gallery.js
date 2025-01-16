function portfolioGallery() {
  //* Галерея логотипов партнеров */
  if ($('.portfolioGallery-container .portfolioGallery-slide').length) {
    options__portfolioGallery = {
      slidesPerView: 6,
      loop: false,
      spaceBetween: 30,
      centeredSlides: false,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.portfolioGallery__right',
        prevEl: '.portfolioGallery__left',
      },
      keyboard: true,
      watchOverflow: true,
      zoom: true,
      pagination: {
        el: '.portfolioGallery__pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        481: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      }
    };
    var portfolioGal = new Swiper(
      '.portfolioGallery-container',
      options__portfolioGallery
    );
  }
}