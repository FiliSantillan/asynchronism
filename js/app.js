import { fetchDataCallback } from "./fetchDataCallback.js";
import { fetchData } from "./fetchData.js";
import { buildCard } from "./buildCard.js";

const API = "https://rickandmortyapi.com/api/character",
  callbackContainer = document.getElementById("callback-container"),
  promiseContainer = document.getElementById("promise-container"),
  asyncContainer = document.getElementById("async-container");

// Callbacks
fetchDataCallback(API, (error, data) => {
  if (error) return error;

  data.results.map(character => {
    const card = buildCard(character);
    callbackContainer.appendChild(card);
  });

});

// Promises
fetchData(`${API}?page=2`)
  .then(data => {
    data.results.map(character => {
      const card = buildCard(character);
      promiseContainer.appendChild(card);
    });
  })
  .catch(error => {
    return error;
  });

// Async / Await
(async function fetchDataAsync() {
  const data = await fetchData(`${API}?page=3`);

  data.results.map(character => {
    const card = buildCard(character);
    asyncContainer.appendChild(card);
  });
})();