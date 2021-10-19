const initMobileMenu = () => {
  const menuEl = document.querySelector('.header__menu-mobile');
  const menuBtn = document.querySelector('.header__menu-mobile-menu-button');
  const closeBtn = document.querySelector('.header__menu-mobile-close-button');
  const body = document.body;
  const html = document.querySelector('html');
  body.classList.add('no-scroll');

  const toggleNoScroll = () =>
    html.classList.toggle('no-scroll') & body.classList.toggle('no-scroll');

  const openMenu = () => {
    menuEl.classList.add('open');
    toggleNoScroll();
    closeBtn.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    menuEl.classList.remove('open');
    toggleNoScroll();
    closeBtn.removeEventListener('click', closeMenu);
  };

  menuBtn.addEventListener('click', openMenu);
};

export default initMobileMenu;
