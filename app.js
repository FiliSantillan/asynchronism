import { fetchDataCallback } from "./fetchDataCallback.js";
import { fetchData } from "./fetchData.js";

const API = "https://rickandmortyapi.com/api/character",
      callbackContainer = document.getElementById("callback-container"),
      promiseContainer = document.getElementById("promise-container"),
      asyncContainer = document.getElementById("async-container");

fetchDataCallback(API, (error, data) => {
  if (error) return error;

  data.results.map(character => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <strong class="status">${character.status}</strong>
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <span>${character.species}</span>
    `;

    callbackContainer.appendChild(card);
  });
});

fetchData(`${API}?page=2`)
  .then(data => {
    data.results.map(character => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
      <strong class="status">${character.status}</strong>
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <span>${character.species}</span>
    `;

      promiseContainer.appendChild(card);
    });
  })
  .catch((error) => {
    return error;
  });

const fetchDataAsync = async (url_api) => {
  const data = await fetchData(`${API}?page=3`);
  data.results.map(character => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <strong class="status">${character.status}</strong>
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <span>${character.species}</span>
    `;

    asyncContainer.appendChild(card);
  });
}

fetchDataAsync();
