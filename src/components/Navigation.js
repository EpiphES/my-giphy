export default class Navigation {
  constructor(controlsSelector, contentSelector) {
    this._controls = document.querySelector(controlsSelector);
    this._pages = document.querySelectorAll(contentSelector);
  }
  init() {
    this._controls.querySelectorAll(".controls__link").forEach((link) => {
      link.addEventListener("click", this._handleNavigation);
    });
  }

  _handleNavigation = (evt) => {
    evt.preventDefault();
    const targetPage = evt.target.dataset.target;
    document
      .querySelector(".content_active")
      .classList.remove("content_active");
    document.getElementById(targetPage).classList.add("content_active");
    this._controls
      .querySelector(".controls__link_active")
      .classList.remove("controls__link_active");
    evt.target.classList.add("controls__link_active");
  };
}

// export default class Controls {
//   constructor(controlsSelector, contentSelector) {
//     this._controls = document.querySelector(controlsSelector);
//     this._pages = document.querySelectorAll(contentSelector);
//     this._controlsLinks = this._controls.querySelectorAll(".controls__link");
//     this._showEvent = new Event("show");
//   }
//   init() {
//     this._controlsLinks.forEach((link) => {
//       link.addEventListener("click", this._handleNavigation);
//     });
//     this._pages.forEach((page) => {
//       page.addEventListener("show", this._showPage);
//     });
//     history.replaceState({}, "search", "#search");

//     window.addEventListener("popstate", this._popPage);
//   }

//   _handleNavigation = (evt) => {
//     evt.preventDefault();
//     const targetPage = evt.target.dataset.target;
//     document
//       .querySelector(".content_active")
//       .classList.remove("content_active");
//     document.getElementById(targetPage).classList.add("content_active");
//     this._controls
//       .querySelector(".controls__link_active")
//       .classList.remove("controls__link_active");
//     evt.target.classList.add("controls__link_active");
//     history.pushState({}, targetPage, `#${targetPage}`);
//     document.getElementById(targetPage).dispatchEvent(this._showEvent);
//   };

//   _showPage = (evt) => {
//     console.log(evt.target.id);
//   };

//   _popPage = (evt) => {
//     const hash = location.hash.replace("#", "");
//     document
//       .querySelector(".content_active")
//       .classList.remove("content_active");
//     document.getElementById(hash).classList.add("content_active");

//     document.getElementById(hash).dispatchEvent(this._showEvent);
//   };
// }
