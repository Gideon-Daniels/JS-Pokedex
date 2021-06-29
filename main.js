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
      let container = document.querySelector(".pokemon-list-container");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="button" onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      container.innerHTML += `<br><br><button class="next-button" onclick="getPokemonList('${data.next}')">Next</button>`;
      container.innerHTML += `<br><br><button class="previous-button" onclick="getPokemonList('${data.previous}')">Previous</button>`;
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
    <h3 class="name">${name}</h3>

    `;
    });
}
