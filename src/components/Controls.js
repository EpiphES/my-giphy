export default class Controls {
  constructor(
    controlsSelector,
    handleChangeView,
    handleTrending,
    handleRandom
  ) {
    this._controls = document.querySelector(controlsSelector);
    this._controlsButtons = this._controls.querySelectorAll(".header__link");

    this._handleChangeView = handleChangeView;
    this._handleTrending = handleTrending;
    this._handleRandom = handleRandom;
  }

  setEventListeners() {
    this._controlsButtons.forEach((link) => {
      link.addEventListener("click", this._handleNavButtonClick);
    });

    this._controls
      .querySelector(".header__link_type_trending")
      .addEventListener("click", this._handleTrending);

    this._controls
      .querySelector(".header__link_type_random")
      .addEventListener("click", this._handleRandom);
  }

  _handleNavButtonClick = (evt) => {
    evt.preventDefault();
    const targetPage = evt.target.dataset.target;
    this.toggleButtonState(evt.target);
    this._handleChangeView(targetPage);
  };

  toggleButtonState(button) {
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");

    button.classList.add("header__link_active");
  }
}
