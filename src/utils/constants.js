const templateSelector = ".gallery__template";

const credentials = {
  downloadUrl: "https://api.giphy.com/v1/gifs",
  uploadUrl: "https://upload.giphy.com/v1/gifs",
  apiKey: "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L"
};

const cardConfig = {
  itemSelector: ".gallery__item",
  imageSelector: ".gallery__image",
  titleSelector: ".gallery__title",
}

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

export { templateSelector, credentials, cardConfig, trendingGallerySelector, searchGallerySelector, controlsConfig };
