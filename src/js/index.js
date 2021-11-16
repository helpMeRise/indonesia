const burgerMenu = () => {
    const menuBtn = document.querySelector('.header__menu-button');
    const menu = document.querySelector('.header__menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active')
    })
}

burgerMenu();

const aboutSlider = document.querySelector('.about__pics'),
        aboutSliderWrap = document.querySelector('.about__list'),
        aboutSlides = document.querySelectorAll('.about__item');


const swiper = new Swiper('.swiper', {
    init: false,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
    },
});

if (window.innerWidth <= 769) {

    aboutSlider.classList.add('swiper');
    aboutSliderWrap.classList.add('swiper-wrapper');
    aboutSlides.forEach( item => {
        item.classList.add('swiper-slide');
    })

    swiper.init();
}