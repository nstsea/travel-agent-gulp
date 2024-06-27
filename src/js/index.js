// import autoCompleteАгтс from './modules/autocomplete';

// autoCompleteFunc()


import { easepick, TimePlugin } from '@easepick/bundle';

const picker = new easepick.create({
  element: document.getElementById('datePicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
  ],
  format: "HH:mm, DD/MM/YY",
  plugins: [TimePlugin],
});




// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});

// // import mobileNav from './modules/mobile-nav.js';
// // mobileNav();


