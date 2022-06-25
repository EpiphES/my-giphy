export default class Api {
  constructor(downloadUrl, uploadUrl, apiKey) {
    this._downloadUrl = downloadUrl;
    this._uploadUrl = uploadUrl;
    this._apiKey = apiKey;
  }

  searchGifs(searchWord) {
    return fetch(
      `${this._downloadUrl}/search?api_key=${this._apiKey}&q=${searchWord}&limit=20`
    ).then(this._checkResponse);
  }

  getTrendingGifs() {
    return fetch(
      `${this._downloadUrl}/trending?api_key=${this._apiKey}&limit=20`
    ).then(this._checkResponse);
  }

  getRandomGif() {
    return fetch(`${this._downloadUrl}/random?api_key=${this._apiKey}`).then(
      this._checkResponse
    );
  }

  uploadGifUrl(url) {
    return fetch(
      `${this._uploadUrl}?api_key=${this._apiKey}&source_image_url=${url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `source_image_url=${url}`,
      }
    ).then(this._checkResponse);
  }

  uploadLocalGif(file) {
    return fetch(`${this._uploadUrl}?api_key=${this._apiKey}&file=${file}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `file=${file}`,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка загрузки: ${res.status}`);
  }
}
