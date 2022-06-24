export default class Card {
  constructor(cardData, templateSelector) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".gallery__image");
    this._cardTitle = this._newCard.querySelector(".gallery__title");

    this._cardImage.src = this._cardData.images.downsized.url;
    this._cardImage.alt = this._cardData.title;

    return this._newCard;
  }
}
