import "./index.css";

import {
  templateSelector,
  cardConfig,
  credentials,
  trendingGallerySelector,
  searchGallerySelector,
  controlsConfig,
  singleCardConfig
} from "../utils/constants"

import Navigation from "../components/Navigation.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";
import FormSearch from "../components/FormSearch.js";
import Card from "../components/Card.js";
import Gallery from "../components/Gallery.js";

import Masonry from "masonry-layout";

const api = new Api(credentials);

const navigation = new Navigation(
  controlsConfig,
  handleGetTrending,
  handleGetRandom
);
navigation.init();

const formSearch = new FormSearch(
  handleSearch,
  handleResetSearch,
  ".form_type_search"
);
formSearch.setEventListeners();

const formUploadUrl = new Form(handleUploadUrl, ".form_type_upload");
formUploadUrl.setEventListeners();

const gallerySearch = new Gallery(addNewItem, searchGallerySelector, cardConfig);

const galleryTrending = new Gallery(addNewItem, trendingGallerySelector, cardConfig);

const randomGif = new Gallery(addNewItem, ".single-card", singleCardConfig);

// const randomGif = new SingleCard(".single-card");

function initMasonry(gallerySelector){
  const msnry = new Masonry(gallerySelector, {
    itemSelector: cardConfig.itemSelector,
    columnWidth: 220,
    horizontalOrder: true,
    initLayout: false,
    gutter: 30,
    fitWidth: true,
  });
  msnry.layout();
}

function addNewItem(cardData, config) {
  return new Card(cardData, templateSelector, config).generateCard();
}

function handleSearch({ search }) {
  api
    .searchGifs(search)
    .then((res) => {
      gallerySearch.resetList();
      gallerySearch.renderItems(res.data);
    })
    .then(() => {
      initMasonry(searchGallerySelector)
    })
    .catch((err) => console.log(err));
}

function handleResetSearch() {
  gallerySearch.resetList();
}

function handleGetTrending() {
  api
    .getTrendingGifs()
    .then((res) => {
      galleryTrending.resetList();
      galleryTrending.renderItems(res.data);
    })
    .then(() => {
      initMasonry(trendingGallerySelector);
    })
    .catch((err) => console.log(err));
}

function handleGetRandom() {
  api
    .getRandomGif()
    .then((res) => {
      console.log(res.data);
      randomGif.resetList();
      randomGif.addItem(res.data);
    })
    .catch((err) => console.log(err));
}

function handleUploadUrl({ url, urltags }, form) {
  const tags = urltags.trim().replaceAll(",", " ").replace(/\s+/g, ", ");
  api
    .uploadGifUrl(url, tags)
    .then(() => {
      alert("Ссылка отправлена");
      form.reset();
    })
    .catch((err) => console.log(err));
}
