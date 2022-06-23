export default class Card {
  constructor(cardInfo, templateSelector) {
    this._templateSelector = templateSelector;
    this._card = cardInfo;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".elements__giphy");

    this._cardImage.src = this._card.embed_url;
    // this._cardImage.alt = this._card.title;

    return this._newCard;
  }
}
