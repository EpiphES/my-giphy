export default class Navigation {
  constructor(controlsConfig, handleTrending, handleRandom) {
    this._controlsConfig = controlsConfig;
    this._controls = document.querySelector(this._controlsConfig.controlsSelector);
    this._controlsButtons = this._controls.querySelectorAll(this._controlsConfig.buttonSelector);
    this._handleTrending = handleTrending;
    this._handleRandom = handleRandom;
  }
  init() {
    this._controlsButtons.forEach((link) => {
      link.addEventListener("click", this._handleNavigation);
    });

    this._controls
      .querySelector(this._controlsConfig.trendingButtonSelector)
      .addEventListener("click", this._handleTrending);

    this._controls
      .querySelector(this._controlsConfig.randomButtonSelector)
      .addEventListener("click", this._handleRandom);

    history.replaceState({}, "trending", "#trending");

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
      .querySelector("." + this._controlsConfig.activeButtonClass)
      .classList.remove(this._controlsConfig.activeButtonClass);

    button.classList.add(this._controlsConfig.activeButtonClass);
  }

  _toggleView(targetPage) {
    document
      .querySelector("." + this._controlsConfig.activeViewClass)
      .classList.remove(this._controlsConfig.activeViewClass);
    document
      .getElementById(targetPage)
      .classList.add(this._controlsConfig.activeViewClass);
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
