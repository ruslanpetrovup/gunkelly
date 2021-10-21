const openDropdown = () => {
  const addBuildForm = document.querySelector('[data-pageaddbuild-form]');
  if (!addBuildForm) {
    return;
  } else {
    const emptyTypeMessage = document.querySelector('[data-choose-type-empty]');
    const typeOptions = document.querySelectorAll('[data-choose-type-radio]');
    const formSubmitBtn = document.querySelector(
      '[data-pageaddbuild-form-submit]',
    );
    const successMessage = document.querySelector(
      '[data-pageaddbuild-form-success]',
    );

    const onSuccess = message => {
      toggleIsHidden(message);
      setTimeout(() => {
        toggleIsHidden(message);
      }, 5000);
    };

    const toggleIsHidden = elem => elem?.classList?.toggle('is-hidden');

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

    // show error message if selected build type is empty (rifle/shotgun/handgun)
    const onFormSubmit = e => {
      e.preventDefault(); // Remove this line to enable default form submit
      const { elements } = e.currentTarget;

      onSuccess(successMessage);
      e.currentTarget.reset();
    };

    // show error message if selected build type is empty (rifle/shotgun/handgun) before form submit
    const onFormSubmitBtnClick = () => {
      const isBuildTypeEmpty =
        addBuildForm?.elements['add-build-type']?.value === '' ? true : false;

      const isErrorTextHidden =
        emptyTypeMessage?.classList?.contains('is-hidden');

      // if type not selected - show error message
      if (isBuildTypeEmpty && isErrorTextHidden) {
        emptyTypeMessage.classList.remove('is-hidden');
      }

      // if type selected - hide error message
      if (!isBuildTypeEmpty && !isErrorTextHidden) {
        emptyTypeMessage?.classList?.add('is-hidden');
      }
    };

    addBuildForm?.addEventListener('click', onChooseOptionsBtnClick);
    formSubmitBtn?.addEventListener('click', onFormSubmitBtnClick);
    addBuildForm?.addEventListener('submit', onFormSubmit);
  }
};

export default openDropdown;
