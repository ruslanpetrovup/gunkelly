const initMobileMenu = () => {
  const menuEl = document.querySelector('.header__menu-mobile');
  const menuBtn = document.querySelector('.header__menu-mobile-menu-button');
  const closeBtn = document.querySelector('.header__menu-mobile-close-button');
  const searchBtn = document.querySelector('.header__menu-mobile-search-button');
  const searchEl = document.querySelector('.search')
  const search = () => {
    if (searchEl.classList.contains('open')) {
      searchEl.classList.remove('open');
    } else {
      searchEl.classList.add('open');
    }
  }
  const openMenu = () => {
    menuEl.classList.add('open');
  };
  const closeMenu = () => {
    menuEl.classList.remove('open');
  };
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  searchBtn.addEventListener('click', search);
};
export default initMobileMenu;