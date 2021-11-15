const burgerMenu = () => {
    const menuBtn = document.querySelector('.header__menu-button');
    const menu = document.querySelector('.header__menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active')
    })
}

burgerMenu();