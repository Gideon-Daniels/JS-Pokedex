let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let pokemon_container = document.querySelector(".pokemon-list-container");
      // pokemon_container.innerHTML += `<h1 class="header">Pokedex</h1>`;
      // pokemon_container.innerHTML += `<div class="pokemon-list"></div>`;
      let pokemon_list = document.querySelector(".pokemon-list");
       // Clear the pokemon-list container
       pokemon_list.innerHTML = " ";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        pokemon_list.innerHTML += `<button class="button" onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      pokemon_list.innerHTML += `<button class="next-button" onclick="getPokemonList('${data.next}')">Next</button>`;
      pokemon_list.innerHTML += `<button class="previous-button" onclick="getPokemonList('${data.previous}')">Previous</button>`;
      
    });
}

// Get default pokemon list
getPokemonList(base_URL);

// Function to get information about a specific pokemon
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes through
      console.log(data);
      let sprites = data.sprites.front_default;
      let name = data.name;
      let weight = data.weight;
      let base_exp = data.base_experience;
      // Write data to pokemon information container
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${sprites}" classs="sprites">
    <h3 class="name">${name}</h3>`;
    
    });
}

// ////////////////////////////POKEMON TYPE//////////////////////////////
let pokemon_type = document.querySelector("#pokemon-type");
pokemon_type.innerHTML += `<ul class="items"></ul>`;
let items = document.querySelector(".items");
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
items.innerHTML += `<li class="item"></li>`;
