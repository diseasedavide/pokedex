const nome = document.getElementById("nomePokemon");
const main = document.getElementById("main");


async function getRandomPokemon() {
  let randomNumber = Math.floor(Math.random() * 151) + 1;

  try {
    
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let scelta = nome.value;
    if (nome.value == "") {
      response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + randomNumber
      );
    } else {
      response = await fetch("https://pokeapi.co/api/v2/pokemon/" + scelta.toLowerCase());
      nome.value = "";
    }
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("Pokemon non trovato");
    }

    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML = "";

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonName = document.createElement("h1");
    pokemonName.textContent = data.name;
    pokemonName.style.textTransform = "capitalize";
    pokemonName.classList.add("testo-bianco");

    const pokemonImg = document.createElement("img");
    pokemonImg.src = data.sprites.front_default;
    pokemonImg.alt = data.name;
    pokemonImg.classList.add("pokemon-img");

    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonImg);
    pokemonContainer.appendChild(pokemonCard);

  } catch (error) {
    console.log("Errore");
    const immagineErrore = document.createElement("img");
    immagineErrore.src = "assets/rocket.gif";
    immagineErrore.classList.add("imgError");
    main.appendChild(immagineErrore);
    const btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.textContent ="Oh no! Il tuo Pokémon non è stato trovatoooo... Cliccami per una seconda chance! "
    main.appendChild(btn)
    btn.addEventListener("click", function() {
    location.reload();
    })
  }
  
}



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
