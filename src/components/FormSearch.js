import Form from "./Form.js";

export default class FormSearch extends Form {
  constructor(handleFormSubmit, handleResetSearch, formSelector) {
    super(handleFormSubmit, formSelector);
    this._handleResetSearch = handleResetSearch;
  }

  setEventListeners() {
    super.setEventListeners();
    this._resetButton.addEventListener("click", () =>
      this._handleResetSearch()
    );
  }
}
