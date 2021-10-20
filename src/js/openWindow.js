const initMobileMenu = () => {
  const menuEl = document.querySelector('.header__menu-mobile');
  const menuBtn = document.querySelector('.header__menu-mobile-menu-button');
  const closeBtn = document.querySelector('.header__menu-mobile-close-button');
  const searchBtn = document.querySelector('.header__menu-mobile-search-button');
  const searchEl = document.querySelector('.search');
  const filterMenu = document.querySelector('.searchbuilds__block__filter-mobile');
  const filterBtn = document.querySelector('.searchbuilds-list-mobile-button-filter');
  const filterCloseBtn = document.querySelector('.searchbuilds__block__filter-toomb-close');
  const sorte = document.querySelector('.searchbuilds__block__sorte-mobile')
  const sortCloseBtn = document.querySelector('.searchbuilds__block__sorte-toomb-close');
  const sorteBtn = document.querySelector('.searchbuilds-list-mobile-button-sort');
  const filter = () => {
      filterMenu.classList.add('open');
  }
  const closeFilter = () => {
    filterMenu.classList.remove('open');
  }
  const sorteOpen = () => {
    sorte.classList.add('open');
  }
  const closeSorte = () => {
    sorte.classList.remove('open');
  }

  const search = () => {
    if (searchEl.classList.contains('open')) {
      searchEl.classList.remove('open');
    } else {
      searchEl.classList.add('open');
    }
  }
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
  closeBtn.addEventListener('click', closeMenu);
  searchBtn.addEventListener('click', search);
  filterBtn.addEventListener('click', filter);
  filterCloseBtn.addEventListener('click', closeFilter);
  sorteBtn.addEventListener('click',sorteOpen)
  sortCloseBtn.addEventListener('click', closeSorte)
};
export default initMobileMenu;