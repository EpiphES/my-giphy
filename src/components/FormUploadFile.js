import Form from "./Form.js";

export default class FormUploadFile extends Form {
  constructor(handleFormSubmit, formSelector) {
    super(handleFormSubmit, formSelector);
    this._span = this._form.querySelector(".form__upload-massage");
    this._fileInput = this._form.querySelector(".form__input_type_file");
    this._tagsInput = this._form.querySelector(".form__input_type_tags");
    this._submitButton = this._form.querySelector(".form__button_type_upload");
  }

  setEventListeners() {
    this._fileInput.addEventListener("change", (e) => {
      this._span.textContent = this._fileInput.files[0].name;
    });
    this._resetButton.addEventListener("click", () => {
      this._span.textContent = "Файл не выбран";
    });
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getBase64(this._fileInput.files[0]).then((data) =>
        this._handleFormSubmit(this._getInputValues(), data)
      );
    });
  }

  _getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  _getInputValues() {
    return this._tagsInput.value;
  }
}
