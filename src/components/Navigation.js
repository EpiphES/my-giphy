export default class Navigation {
  constructor(controlsSelector, handleTrending, handleRandom) {
    this._controls = document.querySelector(controlsSelector);
    this._controlsButtons = this._controls.querySelectorAll(".header__link");
    this._handleTrending = handleTrending;
    this._handleRandom = handleRandom;
  }
  init() {
    this._controlsButtons.forEach((link) => {
      link.addEventListener("click", this._handleNavigation);
    });

    this._controls
      .querySelector(".header__link_type_trending")
      .addEventListener("click", this._handleTrending);

    this._controls
      .querySelector(".header__link_type_random")
      .addEventListener("click", this._handleRandom);

    history.replaceState({}, "search", "#search");

    window.addEventListener("popstate", this._popPage);
  }

  _handleNavigation = (evt) => {
    evt.preventDefault();
    const targetPage = evt.target.dataset.target;
    this._toggleButtonState(evt.target);
    this._toggleView(targetPage);
    history.pushState({}, targetPage, `#${targetPage}`);
  };

  _toggleButtonState(button) {
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");

    button.classList.add("header__link_active");
  }

  _toggleView(targetPage) {
    document.querySelector(".view_active").classList.remove("view_active");
    document.getElementById(targetPage).classList.add("view_active");
  }

  _popPage = () => {
    const hash = location.hash.replace("#", "");
    this._toggleView(hash);
    const button = Array.from(this._controlsButtons).find(
      (item) => item.dataset.target === hash
    );
    this._toggleButtonState(button);
  };
}
