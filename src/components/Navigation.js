export default class Navigation {
  constructor(controlsSelector, contentSelector) {
    this._controls = document.querySelector(controlsSelector);
    this._pages = document.querySelectorAll(contentSelector);
    this._controlsLinks = this._controls.querySelectorAll(".header__link");
  }
  init() {
    this._controlsLinks.forEach((link) => {
      link.addEventListener("click", this._handleNavigation);
    });

    history.replaceState({}, "search", "#search");

    window.addEventListener("popstate", this._popPage);
  }

  _handleNavigation = (evt) => {
    evt.preventDefault();
    const targetPage = evt.target.dataset.target;
    document
      .querySelector(".content_active")
      .classList.remove("content_active");
    document.getElementById(targetPage).classList.add("content_active");
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");
    evt.target.classList.add("header__link_active");
    history.pushState({}, targetPage, `#${targetPage}`);
  };

  _popPage = (evt) => {
    const hash = location.hash.replace("#", "");
    document
      .querySelector(".content_active")
      .classList.remove("content_active");
    document.getElementById(hash).classList.add("content_active");
    this._controls
      .querySelector(".header__link_active")
      .classList.remove("header__link_active");
    Array.from(this._controlsLinks)
      .find((item) => item.dataset.target == hash)
      .classList.add("header__link_active");
  };
}
