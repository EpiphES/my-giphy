const apiKey = "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L";

import Navigation from "../components/Navigation.js";
import Form from "../components/Form.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

const navigation = new Navigation(".header__controls", ".content");
navigation.init();

const formForSearch = new Form(handleSearch, ".form_type_search");
formForSearch.setEventListeners();

const cardList = new Section(addNewItem, ".elements");

function addNewItem(cardInfo) {
  return new Card(cardInfo, ".item__template").generateCard();
}

function handleSearch({ search }) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=20&offset=10&rating=g&lang=ru`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => cardList.renderItems(res.data));
}
