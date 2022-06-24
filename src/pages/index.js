import Navigation from "../components/Navigation.js";
import Form from "../components/Form.js";
import Card from "../components/Card.js";
import Gallery from "../components/Gallery.js";
import Api from "../components/Api.js";

const api = new Api(
  "https://api.giphy.com/v1/gifs/",
  "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L"
);

const navigation = new Navigation(".header__controls", ".content");
navigation.init();

const formForSearch = new Form(handleSearch, ".form_type_search");
formForSearch.setEventListeners();

const gallerySearch = new Gallery(addNewItem, ".gallery_place_search");

const galleryTrending = new Gallery(addNewItem, ".gallery_place_trending");

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
    .catch((err) => console.log(err));
}

function handleTrending() {
  api
    .getTrendingGifs()
    .then((res) => {
      galleryTrending.resetList();
      galleryTrending.renderItems(res.data);
    })
    .catch((err) => console.log(err));
}

handleTrending();
