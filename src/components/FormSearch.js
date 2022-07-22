import Form from "./Form.js";

export default class FormSearch extends Form {
  constructor(handleFormSubmit, handleResetSearch, formSelector, inputSelector, resetButtonSelector) {
    super(handleFormSubmit, formSelector, inputSelector);
    this._handleResetSearch = handleResetSearch;
    this._resetButton = this._form.querySelector(resetButtonSelector);
  }

  resetInput() {
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._resetButton.addEventListener("click", () =>
      this._handleResetSearch()
    );
  }
}
