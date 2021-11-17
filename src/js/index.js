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
    const selectDate = document.querySelector('#tour__date');
    const optionsDateBlock = document.querySelector('.options__date-wrap');
    const optionsDate = selectDate.querySelectorAll('.tour__option')
    const dates = document.querySelectorAll('.options__radio_date');
    const btn = document.querySelector('.options__button_date');
    const labels = optionsDateBlock.querySelectorAll('.radio__label');
    const selectText = document.querySelector('.tour__select-text');
    const arrow = document.querySelector('.tour__select-arrow');

    selectText.textContent = optionsDate[0].textContent;

    arrow.addEventListener('click', () => {
        optionsDateBlock.classList.toggle('options_active')
    })

    dates.forEach( item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            target.closest('.options__date').classList.add('options__date_active');
            dates.forEach( i => {
                if (!i.checked) {
                    i.closest('.options__date').classList.remove('options__date_active');
                }
            })
        })
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        dates.forEach( (item, index) => {
            if ( item.checked ) {
                selectDate.selectedIndex = index + 1;
                selectText.textContent = optionsDate[index + 1].textContent;
            }

            optionsDateBlock.classList.remove('options_active')
        })
    })

}

selects();