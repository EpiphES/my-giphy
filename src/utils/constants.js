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

const controlsConfig = {
  controlsSelector: ".header__controls",
  buttonSelector: ".header__link",
  activeButtonClass: "header__link_active",
  activeViewClass: "view_active",
  trendingButtonSelector: ".header__link_type_trending",
  randomButtonSelector: ".header__link_type_random",

};

export { templateSelector, credentials, cardConfig, singleCardConfig, trendingGallerySelector, searchGallerySelector, controlsConfig };
