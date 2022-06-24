export default class Gallery {
  _renderer;
  _container;

  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(array) {
    array.forEach((item) => this.addItem(item));
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.append(cardElement);
  }

  resetList() {
    this._container.innerHTML = "";
  }
}
