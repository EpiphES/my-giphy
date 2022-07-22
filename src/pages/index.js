import "./index.css";

import Navigation from "../components/Navigation.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";
import FormSearch from "../components/FormSearch.js";
import Card from "../components/Card.js";
import Gallery from "../components/Gallery.js";
import SingleCard from "../components/SingleCard.js";
import Masonry from "masonry-layout";

const api = new Api(
  "https://api.giphy.com/v1/gifs",
  "https://upload.giphy.com/v1/gifs",
  "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L"
);

const navigation = new Navigation(
  ".header__controls",
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

const gallerySearch = new Gallery(addNewItem, ".gallery_place_search");

const galleryTrending = new Gallery(addNewItem, ".gallery_place_trending");

const randomGif = new SingleCard(".single-card");

function initMasonry(){
  const elem = document.querySelector(".gallery_place_trending");
  const msnry = new Masonry(elem, {
    itemSelector: ".gallery__item",
    columnWidth: 200,
    horizontalOrder: true,
    initLayout: false,
    gutter: 30,
    fitWidth: true,
  });
  msnry.reloadItems();
  msnry.layout();
}

function addNewItem(cardData) {
  return new Card(cardData, ".gallery__template").generateCard();
}

function handleSearch({ search }) {
  api
    .searchGifs(search)
    .then((res) => {
      gallerySearch.resetList();
      gallerySearch.renderItems(res.data);
    })
    .then(() => {})
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
      initMasonry();
    })
    .catch((err) => console.log(err));
}

function handleGetRandom() {
  randomGif.cleanCard();
  api
    .getRandomGif()
    .then((res) => {
      randomGif.showCard(res.data);
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
