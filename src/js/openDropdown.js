const openDropdown = () => {
  const addBuildForm = document.querySelector('[data-pageaddbuild-form]');
  const emptyTypeMessage = document.querySelector('[data-choose-type-empty]');
  const typeOptions = document.querySelectorAll('[data-choose-type-radio]');

  const toggleIsHidden = elem => elem?.classList?.toggle('is-hidden');

  // show error message if selected build type is empty (rifle/shotgun/handgun)
  const onFormSubmit = e => {
    e.preventDefault(); // To other developers -> remove this line to enable default form submit
    console.log(e);
    const { elements } = e.currentTarget;
    console.log(elements[['add-build-type']]);

    const isTypeEmpty = elements['add-build-type']?.value === '' ? true : false;
    const isErrorTextHidden =
      emptyTypeMessage?.classList?.contains('is-hidden');

    // if type not selected - show error message
    if (isTypeEmpty && isErrorTextHidden) {
      emptyTypeMessage.classList.remove('is-hidden');
    }

    // if type selected - hide error message
    if (!isTypeEmpty && !isErrorTextHidden) {
      emptyTypeMessage?.classList?.add('is-hidden');
    }
  };

  // show dropdown menu
  const onChooseOptionsBtnClick = ({
    target: { nodeName, dataset, value },
  }) => {
    if (nodeName !== 'BUTTON' || !dataset.hasOwnProperty('dropdownOpen')) {
      return;
    }

    const dropdown = document.querySelector(`[data-dropdown-menu-${value}]`);
    toggleIsHidden(dropdown);
  };

  addBuildForm?.addEventListener('click', onChooseOptionsBtnClick);
  addBuildForm?.addEventListener('submit', onFormSubmit);
};

export default openDropdown;
