const menuEl = document.querySelector('.header__menu-mobile');
const menuBtn = document.querySelector('.header__menu-mobile-menu-button');
const closeBtn = document.querySelector('.header__menu-mobile-close-button');

const openMenu = () => {
  menuEl.classList.add('open');
};
const closeMenu = () => {
  menuEl.classList.remove('open');
};
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
