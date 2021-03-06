const pokeContainer = document.getElementById("poke-container");

const pokemon_count = 151;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = async (data) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const pokeTypes = data.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  pokemonEl.style.backgroundColor = colors[type];

  const pokemonInnerHTML = `
  <div class="img-container">
    <img src="${data.sprites.front_default}" alt="${data.name}">
  </div>
  <div class="info">
    <span class="number">#${
      data.id < 10 ? "00" + data.id : data.id < 100 ? "0" + data.id : data.id
    }</span>
    <h3 class="name">${data.name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
