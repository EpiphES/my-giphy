const key = "U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

const cardsList = new Section(addNewItem, ".elements");

function addNewItem(cardInfo) {
  return new Card(cardInfo, ".item__template").generateCard();
}

function getInitialCards() {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=U5zS22kTjXKZUEQVNwtDWaGWJZFSGT1L&q=%D0%BA%D0%B8%D1%82%D0%B0%D0%B9&limit=20&offset=10&rating=g&lang=ru`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => cardsList.renderItems(res.data));
}

// getInitialCards();
