$(function () {
  const swiperOptions = {
    paginationClickable: true,
    autoplay: 7500,
    spaceBetween: 0,
    loop: true,
    effect: 'slide',
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination1',
    // },
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    on: {
      activeIndexChange: function () {
        console.log('activeIndexChange');

        $('.swiper-slide')
          .children('.swiper__cadr')
          .removeClass('animationBaretsky1')
          .fadeOut(500);

        setTimeout(function () {
          $('.swiper-slide-active')
            .children('.swiper__cadr')
            .fadeIn(500)
            .addClass('animated')
            .addClass('animationBaretsky1');
        }, 500);
      },
    },
  };

  const swiper1 = new Swiper('.swiper-container1', swiperOptions);

  swiper1.on('beforeSlideChangeStart', function () {
    console.log('beforeSlideChangeStart');
  });
});