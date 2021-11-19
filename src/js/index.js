    const burgerMenu = () => {
        const menuBtn = document.querySelector('.header__menu-button');
        const menu = document.querySelector('.header__menu');

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('header__menu_active')
        })
    }

    burgerMenu();

    const heroBtn = document.querySelector('.hero__button');
    const reservation = document.querySelector('.reservation');
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        reservation.scrollIntoView();
    })

    const aboutSlider = document.querySelector('.about__pics'),
        aboutSliderWrap = document.querySelector('.about__list'),
        aboutSlides = document.querySelectorAll('.about__item');

    const aboutSwiper = new Swiper('.about__slider', {
        init: false,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    const sliderMob = () => {
        if (window.innerWidth <= 767) {
            aboutSlider.classList.add('about__slider', 'swiper');
            aboutSliderWrap.classList.add('swiper-wrapper');
            aboutSlides.forEach( item => {
                item.classList.add('swiper-slide');
            })

            aboutSwiper.init();
        }
    }
    setTimeout(sliderMob, 100);

    $('.travel__accordion').accordion({
        active: 0,
        collapsible: true,
        heightStyle: 'content',
        icons: {
            header: 'travel__marker',
            activeHeader: 'travel__marker travel__marker_active'
        }
    });

    const selects = () => {

        const reservation = document.querySelector('.reservation');

        const dateWrap = document.querySelector('.tour__select-wrapper_date');
        const peopleWrap = document.querySelector('.tour__select-wrapper_people');
        const optionsWrap = document.querySelector('.tour__select-wrapper_options');
        const dateWrapReservation = document.querySelector('.reservation__select-wrapper_date');
        const peopleWrapReservation = document.querySelector('.reservation__select-wrapper_people');
        const optionsWrapReservation = document.querySelector('.reservation__select-wrapper_options');

        const selectDate = document.querySelector('#tour__date');
        const selectPeople = document.querySelector('#tour__people');
        const selectOptions = document.querySelector('#tour__options');
        const selectDateReservation = document.querySelector('#reservation__date');
        const selectPeopleReservation = document.querySelector('#reservation__people');
        const selectOptionsReservation = document.querySelector('#reservation__options');

        const optionsDateBlock = document.querySelector('.options__date-wrap');
        const optionsDate = selectDate.querySelectorAll('.tour__option')
        const optionsPeopleBlock = document.querySelector('.options__people-wrap');
        const optionsPeople = peopleWrap.querySelectorAll('.tour__option')
        const optionsOptionsBlock = document.querySelector('.options__options-wrap');
        const optionsOptions = optionsWrap.querySelectorAll('.tour__option')

        const optionsDateBlockReservation = reservation.querySelector('.options__date-wrap');
        const optionsDateReservation = selectDateReservation.querySelectorAll('.tour__option')
        const optionsPeopleBlockReservation = reservation.querySelector('.options__people-wrap');
        const optionsPeopleReservation = peopleWrapReservation.querySelectorAll('.tour__option')
        const optionsOptionsBlockReservation = reservation.querySelector('.options__options-wrap');
        const optionsOptionsReservation = optionsWrapReservation.querySelectorAll('.tour__option')


        const dates = dateWrap.querySelectorAll('.options__radio');
        const people = peopleWrap.querySelectorAll('.options__radio');
        const options = optionsWrap.querySelectorAll('.options__checkbox');

        const datesReservation = dateWrapReservation.querySelectorAll('.options__radio');
        const peopleReservation = peopleWrapReservation.querySelectorAll('.options__radio');
        const optionsReservation = optionsWrapReservation.querySelectorAll('.options__checkbox');

        const btnDate = document.querySelector('.options__button_date');
        const btnOptions = document.querySelector('.options__button_options');

        const btnDateReservation = reservation.querySelector('.options__button_date');
        const btnOptionsReservation = reservation.querySelector('.options__button_options');

        const selectDateText = dateWrap.querySelector('.tour__select-text');
        const selectPeopleText = peopleWrap.querySelector('.tour__select-text');
        const selectOptionsText = optionsWrap.querySelector('.tour__select-text');
        const selectDateTextReservation = dateWrapReservation.querySelector('.reservation__select-text');
        const selectPeopleTextReservation = peopleWrapReservation.querySelector('.reservation__select-text');
        const selectOptionsTextReservation = optionsWrapReservation.querySelector('.reservation__select-text');

        const tourForm = document.querySelector('.tour__form');

        let text = '';

        selectDateText.textContent = optionsDate[0].textContent;
        selectPeopleText.textContent = optionsPeople[0].textContent;
        selectOptionsText.textContent = optionsOptions[0].textContent;

        selectDateTextReservation.textContent = optionsDateReservation[0].textContent;
        selectPeopleTextReservation.textContent = optionsPeopleReservation[0].textContent;
        selectOptionsTextReservation.textContent = optionsOptionsReservation[0].textContent;

        dateWrap.addEventListener('click', (e) => {
            let coords = dateWrap.getBoundingClientRect();

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsDateBlock.classList.toggle('options_active');
            }

        });
        peopleWrap.addEventListener('click', (e) => {
            let coords = peopleWrap.getBoundingClientRect();

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsPeopleBlock.classList.toggle('options_active');
            }

        });
        optionsWrap.addEventListener('click', (e) => {
            let coords = optionsWrap.getBoundingClientRect();

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsOptionsBlock.classList.toggle('options_active');
            }

        });

        dateWrapReservation.addEventListener('click', (e) => {
            let coords = dateWrapReservation.getBoundingClientRect();
            console.log(1)

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsDateBlockReservation.classList.toggle('options_active');
            }

        });
        peopleWrapReservation.addEventListener('click', (e) => {
            let coords = peopleWrapReservation.getBoundingClientRect();

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsPeopleBlockReservation.classList.toggle('options_active');
            }

        });
        optionsWrapReservation.addEventListener('click', (e) => {
            let coords = optionsWrapReservation.getBoundingClientRect();

            if((e.clientX > coords.left + coords.width) || (e.clientY > coords.top + coords.height)) {
                return false;
            } else {
                optionsOptionsBlockReservation.classList.toggle('options_active');
            }
        });
        dateWrap.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsDateBlock.classList.toggle('options_active')
            }

        })
        peopleWrap.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsPeopleBlock.classList.toggle('options_active')
            }

        })
        optionsWrap.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsOptionsBlock.classList.toggle('options_active')
            }

        })
        dateWrapReservation.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsDateBlockReservation.classList.toggle('options_active')
            }

        })
        peopleWrapReservation.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsDateBlockReservation.classList.toggle('options_active')
            }

        })
        optionsWrapReservation.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.code == 'Space') {
                optionsDateBlockReservation.classList.toggle('options_active')
            }

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

        datesReservation.forEach( item => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                target.closest('.options__date').classList.add('options__date_active');
                datesReservation.forEach( i => {
                    if (!i.checked) {
                        i.closest('.options__date').classList.remove('options__date_active');
                    }
                })
            })
        });
        peopleReservation.forEach( (item, index) => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                target.closest('.options__number').classList.add('options__number_active');
                peopleReservation.forEach( i => {
                    if (!i.checked) {
                        i.closest('.options__number').classList.remove('options__number_active');
                    }
                })
                selectPeopleReservation.selectedIndex = index + 1;
                selectPeopleTextReservation.textContent = optionsPeopleReservation[index + 1].textContent + ' человек';
                optionsPeopleBlockReservation.classList.remove('options_active')
            })
        });
        optionsReservation.forEach( item => {
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

        btnDateReservation.addEventListener('click', (e) => {
            e.preventDefault();
            datesReservation.forEach( (item, index) => {
                if ( item.checked ) {
                    selectDateReservation.selectedIndex = index + 1;
                    selectDateTextReservation.textContent = optionsDateReservation[index + 1].textContent;
                }
                optionsDateBlockReservation.classList.remove('options_active')
            })
        })
        btnOptionsReservation.addEventListener('click', (e) => {
            e.preventDefault();
            selectOptionsTextReservation.textContent = '';
            text = '';
            optionsReservation.forEach( (item, index) => {
                if ( item.checked ) {
                    selectOptionsReservation.selectedIndex = index + 1;
                    text += optionsOptionsReservation[index + 1].textContent + ', ';
                }
            })
            selectOptionsTextReservation.textContent += text;
            optionsOptionsBlockReservation.classList.remove('options_active')
            selectOptionsTextReservation.classList.add('options__select-text_active')
        })

        tourForm.addEventListener('submit', e => {
            e.preventDefault();

            dates.forEach( (item, index) => {
                if (item.checked) {
                    datesReservation.forEach(() => {
                        datesReservation[index].checked = true;
                    })
                }
            })
            datesReservation.forEach( (item, index) => {
                if (item.checked) {
                        selectDateReservation.selectedIndex = index + 1;
                        selectDateTextReservation.textContent = optionsDateReservation[index + 1].textContent;
                }
            })
            people.forEach( (item, index) => {
                if (item.checked) {
                    peopleReservation.forEach(() => {
                        peopleReservation[index].checked = true;
                    })
                }
            });
            peopleReservation.forEach( (item, index) => {
                if (item.checked) {
                    selectPeopleReservation.selectedIndex = index + 1;
                    selectPeopleTextReservation.textContent = optionsPeopleReservation[index + 1].textContent + ' человек';
                    optionsPeopleBlockReservation.classList.remove('options_active')
                }
            })
            options.forEach( (item, index) => {
                if (item.checked) {
                    optionsReservation.forEach( (item, index) => {
                        optionsReservation[index].checked = true;
                    })
                }
            });
            selectOptionsTextReservation.textContent = selectOptionsText.textContent;
            selectOptionsTextReservation.classList.add('options__select-text_active')


            reservation.scrollIntoView();
        })
    }

    selects();

    const albumSwiper = new Swiper('.album__slider', {
        slidesPerView: 1,
        centered: true,
        navigation: {
            prevEl: '.album__left',
            nextEl: '.album__right',
            disabledClass: 'album__nav_dis'
        },
        breakpoints: {
            1025: {
                slidesPerView: 'auto',
            }
        }
    });
    albumSwiper.init();

    const reservationForm = $('.reservation__form');

    reservationForm.submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                $('.reservation__title').text('Спасибо за заявку');
                $('.reservation__selects').slideUp();
                $('.reservation__name-wrap').slideUp();
                $('.reservation__contacts').slideUp();
                $('.reservation__bottom').slideUp();
            },
            error() {
                $('.reservation__title').text('Попробуйте позже');
            }
        })
    })


    const footerForm = $('.footer__form');

    footerForm.submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                $('.footer__form-title').text('Спасибо за заявку');
                $('.footer__text').slideUp();
                $('.footer__input-wrap').slideUp();
            },
            error() {
                $('.footer__form-title').text('Попробуйте позже');
            }
        })
    })


