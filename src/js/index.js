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

if (window.innerWidth <= 768) {

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
    const dateWrap = document.querySelector('.tour__select-wrapper_date');
    const peopleWrap = document.querySelector('.tour__select-wrapper_people');
    const optionsWrap = document.querySelector('.tour__select-wrapper_options');

    const selectDate = document.querySelector('#tour__date');
    const selectPeople = document.querySelector('#tour__people');
    const selectOptions = document.querySelector('#tour__options');

    const optionsDateBlock = document.querySelector('.options__date-wrap');
    const optionsDate = selectDate.querySelectorAll('.tour__option')
    const optionsPeopleBlock = document.querySelector('.options__people-wrap');
    const optionsPeople = peopleWrap.querySelectorAll('.tour__option')
    const optionsOptionsBlock = document.querySelector('.options__options-wrap');
    const optionsOptions = optionsWrap.querySelectorAll('.tour__option')


    const dates = dateWrap.querySelectorAll('.options__radio');
    const people = peopleWrap.querySelectorAll('.options__radio');
    const options = optionsWrap.querySelectorAll('.options__checkbox');

    const btnDate = document.querySelector('.options__button_date');
    const btnOptions = document.querySelector('.options__button_options');

    const selectDateText = dateWrap.querySelector('.tour__select-text');
    const selectPeopleText = peopleWrap.querySelector('.tour__select-text');
    const selectOptionsText = optionsWrap.querySelector('.tour__select-text');

    const arrowDate = dateWrap.querySelector('.tour__select-arrow');
    const arrowPeople = peopleWrap.querySelector('.tour__select-arrow');
    const arrowOptions = optionsWrap.querySelector('.tour__select-arrow');

    const tourBtn = document.querySelector('.tour__button');

    let text = '';

    selectDateText.textContent = optionsDate[0].textContent;
    selectPeopleText.textContent = optionsPeople[0].textContent;
    selectOptionsText.textContent = optionsOptions[0].textContent;

    arrowDate.addEventListener('click', () => {
        optionsDateBlock.classList.toggle('options_active')
    })
    arrowPeople.addEventListener('click', () => {
        optionsPeopleBlock.classList.toggle('options_active')
    })
    arrowOptions.addEventListener('click', () => {
        optionsOptionsBlock.classList.toggle('options_active')
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
    people.forEach( (item, index) => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            target.closest('.options__number').classList.add('options__number_active');
            people.forEach( i => {
                if (!i.checked) {
                    i.closest('.options__number').classList.remove('options__number_active');
                }
            })
            selectPeople.selectedIndex = index + 1;
            selectPeopleText.textContent = optionsPeople[index + 1].textContent + ' человек';
            optionsPeopleBlock.classList.remove('options_active')
        })
    });
    options.forEach( item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            target.closest('.options__option').classList.toggle('options__option_active');
            target.closest('.options__checkbox-label').previousElementSibling.classList.toggle('options__check_active');

        })
    });

    btnDate.addEventListener('click', (e) => {
        e.preventDefault();
        dates.forEach( (item, index) => {
            if ( item.checked ) {
                selectDate.selectedIndex = index + 1;
                selectDateText.textContent = optionsDate[index + 1].textContent;
            }
            optionsDateBlock.classList.remove('options_active')
        })
    })


    btnOptions.addEventListener('click', (e) => {
        e.preventDefault();
        selectOptionsText.textContent = '';
        text = '';
        options.forEach( (item, index) => {
            if ( item.checked ) {
                selectOptions.selectedIndex = index + 1;
                text += optionsOptions[index + 1].textContent + ', ';
            }
        })
        selectOptionsText.textContent += text;
        optionsOptionsBlock.classList.remove('options_active')
        selectOptionsText.classList.add('options__select-text_active')
    })

    tourBtn.addEventListener('click', e => {
        e.preventDefault();
    })
}

selects();