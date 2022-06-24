export default class Navigation {
  constructor(controlsSelector, viewSelector, handleTrending, handleRandom) {
    this._controls = document.querySelector(controlsSelector);
    this._pages = document.querySelectorAll(viewSelector);
    this._controlsLinks = this._controls.querySelectorAll(".header__link");
    this._trendingButton = this._controls.querySelector("#trending-link");
    this._randomButton = this._controls.querySelector("#random-link");
    this._handleTrending = handleTrending;
    this._handleRandom = handleRandom;
  }
  init() {
    this._controlsLinks.forEach((link) => {
      link.addEventListener("click", this._handleNavigation);
    });

    this._controls
      .querySelector("#trending-link")
      .addEventListener("click", this._handleTrending);

    this._controls
      .querySelector("#random-link")
      .addEventListener("click", this._handleRandom);

    history.replaceState({}, "search", "#search");

    window.addEventListener("popstate", this._popPage);
  }

  _handleNavigation = (evt) => {
    evt.preventDefault();
    const targetPage = evt.target.dataset.target;
    document.querySelector(".view_active").classList.remove("view_active");
    document.getElementById(targetPage).classList.add("view_active");
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");
    evt.target.classList.add("header__link_active");
    history.pushState({}, targetPage, `#${targetPage}`);
  };

  _popPage = (evt) => {
    const hash = location.hash.replace("#", "");
    document.querySelector(".view_active").classList.remove("view_active");
    document.getElementById(hash).classList.add("view_active");
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");
    Array.from(this._controlsLinks)
      .find((item) => item.dataset.target == hash)
      .classList.add("header__link_active");
  };
}
