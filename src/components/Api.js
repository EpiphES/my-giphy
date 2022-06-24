export default class Api {
  constructor(baseUrl, apiKey) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  searchGifs(searchWord) {
    return fetch(
      `${this._baseUrl}search?api_key=${this._apiKey}&q=${searchWord}&limit=20`
    ).then(this._checkResponse);
  }

  getTrendingGifs() {
    return fetch(
      `${this._baseUrl}trending?api_key=${this._apiKey}&limit=20`
    ).then(this._checkResponse);
  }

  getRandomGif() {
    return fetch(`${this._baseUrl}random?api_key=${this._apiKey}`).then(
      this._checkResponse
    );
  }

  uploadGifUrl(url) {
    return fetch(`${this._baseUrl}?api_key=${this._apiKey}&file=${url}`).then(
      this._checkResponse
    );
  }

  uploadLocalGif(file) {
    return fetch(`${this._baseUrl}?api_key=${this._apiKey}&file=${file}`).then(
      this._checkResponse
    );
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
