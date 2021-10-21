const initModalAddPart = () => {
  const openModalBtn = document.querySelector('[data-modal-addpart-open]');
  if (!openModalBtn) {
    return;
  } else {
    const html = document.querySelector('html');
    const body = document.body;
    const modal = document.querySelector('[data-modal-addpart]');
    const closeModalBtn = document.querySelector('[data-modal-addpart-close]');
    const form = document.querySelector('[data-modal-addpart-form]');

    const isModalOpen = modalOpenBtn => {
      return modalOpenBtn.getAttribute('aria-expanded') === 'true' || false;
    };

    const toggleIsHidden = elem => elem.classList.toggle('is-hidden');
    const toggleNoScroll = elem => elem.classList.toggle('no-scroll');

    const toggleModal = () => {
      setTimeout(() => {
        openModalBtn.setAttribute('aria-expanded', !isModalOpen(openModalBtn));

        toggleNoScroll(html), toggleNoScroll(body), toggleIsHidden(modal);
      }, 10);
    };

    const closeModal = () => {
      toggleModal();
      modal.removeEventListener('mousedown', onBackdropClickCloseModal);
      closeModalBtn.removeEventListener('click', onCloseModalBtnClick);
      document.removeEventListener('keydown', onEscCloseModal);
    };

    const onCloseModalBtnClick = () => {
      if (!isModalOpen(openModalBtn)) {
        return;
      }

      closeModal();
    };

    const onBackdropClickCloseModal = event => {
      if (event.target !== event.currentTarget) {
        return;
      }

      closeModal();
    };

    const onEscCloseModal = event => {
      if (event.code !== 'Escape') {
        return;
      }

      if (isModalOpen(openModalBtn)) {
        closeModal();
      }
    };

    const onFormSubmit = event => {
      event.preventDefault();
      // console.log('This is onFormSubmit callback body');
      event.currentTarget.reset();
    };

    const openModal = () => {
      toggleModal();
      modal.addEventListener('mousedown', onBackdropClickCloseModal);
      closeModalBtn.addEventListener('click', onCloseModalBtnClick);
      document.addEventListener('keydown', onEscCloseModal);
      form.addEventListener('submit', onFormSubmit);
    };

    const onOpenModalBtnClick = () => {
      if (isModalOpen(openModalBtn)) {
        return;
      }

      openModal();
    };

    openModalBtn.addEventListener('click', onOpenModalBtnClick);
  }
};
export default initModalAddPart;
