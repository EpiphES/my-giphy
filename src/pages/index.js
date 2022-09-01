import "./index.css";

import {
  templateSelector,
  cardConfig,
  credentials,
  trendingGallerySelector,
  searchGallerySelector,
  singleCardContainerSelector,
  controlsConfig,
  singleCardConfig,
  searchFormSelector,
  uploadFormSelector,
  inputSelector, resetButtonSelector
} from "../utils/constants";

import Masonry from "masonry-layout";

import Navigation from "../components/Navigation.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";
import FormSearch from "../components/FormSearch.js";
import Card from "../components/Card.js";
import CardList from "../components/CardList.js";

const api = new Api(credentials);

const navigation = new Navigation(
  controlsConfig,
  handleGetTrending,
  handleGetRandom,
  handleClickSearch
);
navigation.init();

const formSearch = new FormSearch(
  handleSearch,
  handleResetSearch,
  searchFormSelector,
  inputSelector,
  resetButtonSelector
);
formSearch.setEventListeners();

const formUploadUrl = new Form(handleUploadUrl, uploadFormSelector, inputSelector);
formUploadUrl.setEventListeners();

const searchList = new CardList(addNewItem, searchGallerySelector, cardConfig);

const trendingList = new CardList(addNewItem, trendingGallerySelector, cardConfig);

const singleCard = new CardList(
  addNewItem,
  singleCardContainerSelector,
  singleCardConfig
);

function initMasonry(gallerySelector){
  const msnry = new Masonry(gallerySelector, {
    itemSelector: cardConfig.itemSelector,
    columnWidth: 200,
    horizontalOrder: true,
    initLayout: false,
    gutter: 20,
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
      searchList.resetList();
      searchList.renderItems(res.data);
    })
    .then(() => {
      initMasonry(searchGallerySelector)
    })
    .catch((err) => console.log(err));
}
function handleClickSearch() {
  searchList.resetList();
  formSearch.resetInput();
}

function handleResetSearch() {
  searchList.resetList();
}

function handleGetTrending() {
  api
    .getTrendingGifs()
    .then((res) => {
      trendingList.resetList();
      trendingList.renderItems(res.data);
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
      singleCard.resetList();
      singleCard.addItem(res.data);
    })
    .catch((err) => console.log(err));
}

function handleUploadUrl({ url, urltags }, form) {
  const tags = urltags.trim().replaceAll(",", " ").replace(/\s+/g, ", ");
  api
    .uploadGifUrl(url, tags)
    .then(() => {
      alert("URL was successfully submitted ");
      form.reset();
    })
    .catch((err) => console.log(err));
}

handleGetTrending();
