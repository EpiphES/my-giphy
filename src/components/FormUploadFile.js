import Form from "./Form.js";

export default class FormUploadFile extends Form {
  constructor(handleFormSubmit, formSelector) {
    super(handleFormSubmit, formSelector);
    this._span = this._form.querySelector(".form__upload-massage");
    this._input = this._form.querySelector("#file-input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._input.addEventListener("change", () => {
      this._span.textContent = this._input.value;
    });
    this._resetButton.addEventListener("click", () => {
      this._span.textContent = "Файл не выбран";
    });
  }
}
