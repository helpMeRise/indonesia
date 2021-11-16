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

$('.travel__accordion').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    icons: {
        header: 'travel__marker',
        activeHeader: 'travel__marker travel__marker_active'
    }
});

const selects = () => {
    const select = document.querySelector('#tour__date');
    const optionsBlock = document.querySelector('.options');
    const options = select.querySelectorAll('.tour__option')
    const dates = document.querySelectorAll('.radio');
    const btn = document.querySelector('.done');
    const labels = optionsBlock.querySelectorAll('.radio__label');

    select.addEventListener('click', (e) => {
        e.preventDefault();
        select.setAttribute('disabled', 'disabled');
        options.forEach( item => {
            item.style.display = 'none';
        })
        optionsBlock.classList.toggle('options_active');
    })

    btn.addEventListener('click', () => {
        dates.forEach( (item, index) => {
            if ( item.checked ) {
                select.selectedIndex = index + 1;
            }
        })
    })

}

selects();