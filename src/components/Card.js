export default class Card {
  constructor(cardData, templateSelector) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".gallery__item")
      .cloneNode(true);

     this._height = this._cardData.images.fixed_width.height;
     cardElement.style.height = this._height + "px";

    return cardElement;
  };

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".gallery__image");
    // this._cardTitle = this._newCard.querySelector(".gallery__title");
    this._height = this._cardData.images.fixed_width.height;
    this._cardImage.src = this._cardData.images.fixed_width.url;
    this._cardImage.alt = this._cardData.title;
    // this._cardTitle.textContent = this._cardData.title;

    return this._newCard;
  }
}
