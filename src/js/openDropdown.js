const initMobileMenu = () => {
  const dropdownList = document.querySelector('[data-dropdown-list]');

  const toggleDropDown = dropdownToToggle =>
    dropdownToToggle.classList.toggle('is-hidden');

  const onChooseOptionsBtnClick = ({ target }) => {
    if (target.nodeName !== 'BUTTON') return;

    console.log(target.value);

    const dropdownToToggle = document.querySelector(
      `[data-dropdown-menu-${target.value}]`,
    );
    console.log('onChooseOptionsBtnClick ~ dropdownToToggle', dropdownToToggle);

    if (dropdownToToggle) {
      toggleDropDown(dropdownToToggle);
    }
  };

  dropdownList.addEventListener('click', onChooseOptionsBtnClick);
};

export default initMobileMenu;
