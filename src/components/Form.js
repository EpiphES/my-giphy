export default class Form {
  constructor(handleFormSubmit, formSelector, inputSelector) {
    this._form = document.querySelector(formSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._inputList = this._form.querySelectorAll(inputSelector);

  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  _submitFormHandler = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues(), this._form);
  };

  setEventListeners() {
    this._form.addEventListener("submit", this._submitFormHandler);
  }
}
