export const buildCard = (character) => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
    <strong class="status">${character.status}</strong>
    <img src="${character.image}" alt="${character.name}" class="character" />
    <h2>${character.name}</h2>
    <span>${character.species}</span>
  `;

  return card;
}
