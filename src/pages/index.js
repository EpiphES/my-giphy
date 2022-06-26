import "./index.css";

import Navigation from "../components/Navigation.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";
import FormSearch from "../components/FormSearch.js";
import FormUploadFile from "../components/formUploadFile.js";
import Card from "../components/Card.js";
import Gallery from "../components/Gallery.js";
import SingleCard from "../components/SingleCard.js";

const api = new Api(
  "https://api.giphy.com/v1/gifs",
  "https://upload.giphy.com/v1/gifs",
  "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L"
);

const navigation = new Navigation(
  ".header__controls",
  ".view",
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

const formUploadUrl = new Form(handleUploadUrl, "[name='url-form']");
formUploadUrl.setEventListeners();

const formUploadFile = new FormUploadFile(
  handleUploadFile,
  "[name='file-form']"
);
formUploadFile.setEventListeners();

const gallerySearch = new Gallery(addNewItem, ".gallery_place_search");

const galleryTrending = new Gallery(addNewItem, ".gallery_place_trending");

const randomGif = new SingleCard(".single-card");

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
  const tags = processString(urltags);
  api
    .uploadGifUrl(url, tags)
    .then(() => {
      alert("Ссылка отправлена");
      form.reset();
    })
    .catch((err) => console.log(err));
}

function handleUploadFile({ file, filetags }) {
  const tags = processString(filetags);
  api
    .uploadLocalGif(file, tags)
    .then(() => alert("Гифка отправлена"))
    .catch((err) => console.log(err));
}

function processString(string) {
  string.trim().replaceAll(",", " ").replace(/\s+/g, ", ");
}
