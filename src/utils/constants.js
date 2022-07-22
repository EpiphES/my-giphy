const templateSelector = ".template";

const credentials = {
  downloadUrl: "https://api.giphy.com/v1/gifs",
  uploadUrl: "https://upload.giphy.com/v1/gifs",
  apiKey: "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L"
};

const cardConfig = {
  itemSelector: ".gallery__card",
  imageSelector: ".gallery__image",
  titleSelector: ".gallery__title",
  fixedWidth: 220,
}

const singleCardConfig = {
  itemSelector: ".single-card__item",
  imageSelector: ".single-card__image",
  titleSelector: ".single-card__title",
  fixedWidth: false,
};

const trendingGallerySelector = ".gallery_place_trending";
const searchGallerySelector = ".gallery_place_search";
const singleCardContainerSelector = ".single-card";

const controlsConfig = {
  controlsSelector: ".header__controls",
  buttonSelector: ".header__link",
  activeButtonClass: "header__link_active",
  activeViewClass: "view_active",
  trendingButtonSelector: ".header__link_type_trending",
  randomButtonSelector: ".header__link_type_random",
  searchButtonSelector: ".header__link_type_search",
};

const searchFormSelector = ".form_type_search";
const uploadFormSelector = ".form_type_upload";

const inputSelector = ".form__input";
const resetButtonSelector = ".form__button_type_reset";

export {
  templateSelector,
  credentials,
  cardConfig,
  singleCardConfig,
  trendingGallerySelector,
  searchGallerySelector,
  singleCardContainerSelector,
  controlsConfig,
  searchFormSelector,
  uploadFormSelector,
  inputSelector,
  resetButtonSelector
};
