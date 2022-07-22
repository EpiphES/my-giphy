export default class Card {
  constructor(cardData, templateSelector, cardConfig) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._itemSelector = cardConfig.itemSelector;
    this._imageSelector = cardConfig.imageSelector;
    this._titleSelector = cardConfig.titleSelector;
    this._fixedWidth = cardConfig.fixedWidth;
    this._height = this._cardData.images.downsized.height;
    this._width = this._cardData.images.downsized.width;
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

    this._cardImage.style.height = this._fixedWidth
      ? `${(+this._height * this._fixedWidth) / +this._width}px` : this._height + "px";
    this._cardImage.src = this._cardData.images.downsized.url;
    this._cardImage.alt = this._cardData.title;
    this._cardTitle.textContent = this._cardData.title;

    return this._newCard;
  }
}
