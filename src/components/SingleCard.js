export default class SingleCard {
  constructor(selector) {
    this._card = document.querySelector(selector);
    this._image = this._card.querySelector(".single-card__image");
    this._title = this._card.querySelector(".single-card__title");
  }
  showCard(cardData) {
    this._image.src = cardData.images.downsized.url;
    this._image.alt = cardData.title;
    this._title.textContent = cardData.title;
  }
  cleanCard() {
    this._image.src = "/";
    this._image.alt = "";
    this._title.textContent = "";
  }
}
