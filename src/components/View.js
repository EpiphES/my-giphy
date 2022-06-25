export default class View {
  constructor(viewSelector) {
    this._views = document.querySelectorAll(viewSelector);
  }

  toggleViewState(target) {
    document.querySelector(".view_active").classList.remove("view_active");
    document.querySelector(`#${target}`).classList.add("view_active");
  }
}
