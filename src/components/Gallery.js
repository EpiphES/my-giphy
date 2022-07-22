export default class Gallery {
  _renderer;
  _container;

  constructor(renderer, containerSelector, itemConfig) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._itemConfig = itemConfig;
  }

  renderItems(array) {
    array.forEach((item) => this.addItem(item));
  }

  addItem(item) {
    const cardElement = this._renderer(item, this._itemConfig);
    this._container.append(cardElement);
  }

  resetList() {
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
  }
}
