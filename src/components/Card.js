export default class Card {
  constructor(cardData, templateSelector, cardConfig) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._itemSelector = cardConfig.itemSelector;
    this._imageSelector = cardConfig.imageSelector;
    this._titleSelector = cardConfig.titleSelector;
    this._cardConfig = cardConfig;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._itemSelector)
      .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(this._imageSelector);
    this._cardTitle = this._newCard.querySelector(this._titleSelector );

    if(this._cardConfig.fixedWidth) {
      this._cardImage.style.height = this._cardData.images.fixed_width.height + "px";
      this._cardImage.src = this._cardData.images.fixed_width.url;
    }
    else {
      this._cardImage.src = this._cardData.images.original.url;
    }
    this._cardImage.alt = this._cardData.title;
    this._cardTitle.textContent = this._cardData.title;

    return this._newCard;
  }
}
