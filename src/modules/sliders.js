import Swiper, { Navigation, Pagination } from 'swiper';

const sliders = () => {
  
    
  new Swiper('.intro__slider', {
    modules: [Navigation, Pagination],
      loop: true,
      speed: 700,
      autoplay: true,
      autoplay: {
        delay: 100,
      },
      pagination: {
        el: '.intro__slider-dots',
      },
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      spaceBetween: 45,
  });
  
  
  
  new Swiper('.cards__slider-inner', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
    
};



















export default sliders
