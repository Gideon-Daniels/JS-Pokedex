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
      let url = data.url;
    
      // Get element from HTML to write buttons in
      let pokemon_list = document.querySelector(".pokemon-list");
       // Clear the pokemon-list container
       pokemon_list.innerHTML = " ";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        fetch(btn.url)
        .then(res => res.json())
        .then(pokemon => {
          // console.log(pokemon.sprites.front_default)
          pokemon_list.innerHTML += `<div class="pokemon-sprites"> <img onclick="getPokemonInfo('${btn.url}')" src="${pokemon.sprites.front_default}"></div>`;
        })
      });
      // Add a next and previous pokemon button
      let buttons = document.querySelector(".buttons");
      buttons.innerHTML += " ";
      buttons.innerHTML = `<button class="button" class="previous-button" onclick="getPokemonList('${data.previous}')">Previous</button>
                            <button class="button" class="next-button" onclick="getPokemonList('${data.next}')">Next</button>`;
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
      let sprites = data.sprites.other["official-artwork"].front_default;
      let name = data.name;
      let weight = data.weight;
      let height = data.height;
      let base_exp = data.base_experience;
      let ability = data.abilities;
      let type = data.types;
      // looping through abilities
      let a = ``;
      for(let i = 0; i < ability.length;i++ ){
        console.log(ability[i].ability.name)
         a += `<span class="description">${ability[i].ability.name}</span>`;
      }
      let t=" ";
      for(let i = 0; i < type.length; i++){
        console.log(type[i].type.name)
        t += `<span class=description>${type[i].type.name}</span>`;
      }

      // Write data to pokemon information container
      document.querySelector(".images").innerHTML = `
    <img src="${sprites}" classs="sprites">`;
    let details = document.querySelector(".details");
    details.innerHTML = 
    `<h1 class="heading">${name}</h1>
     <ul class="items">
      <li class="item"><span class="label">HEIGHT</span><span class="description" >${data.height}</span></li>
      <li class="item"><span class="label">WEIGHT</span><span class="description" >${weight}</span></li>
      <li class="item"><span class="label">BASE EXP</span><span class="description" >${base_exp}</span></li>
      <li class="item"><span class="label">ABILITY</span>${a}</li>
      <li class="item"><span class="label">TYPE</span>${t}</li>
     </ul> 
    `; 
    });
}

