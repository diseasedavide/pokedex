const nome = document.getElementById("nomePokemon");
const main = document.getElementById("main");
let array = [];
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
const m = document.querySelector(".m");
const n = document.querySelector(".n");
const o = document.querySelector(".o");
const p = document.querySelector(".p");
const q = document.querySelector(".q");
const r = document.querySelector(".r");
const s = document.querySelector(".s");
const t = document.querySelector(".t");
const u = document.querySelector(".u");
const v = document.querySelector(".v");
const w = document.querySelector(".w");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const z = document.querySelector(".z");
const space = document.getElementById("spazio");
const clear = document.getElementById("cancella")

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
    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML = "";
    pokemonContainer.classList.add("container-errore")
    const immagineErrore = document.createElement("img");
    immagineErrore.src = "assets/rocket.gif";
    immagineErrore.classList.add("imgError");
    const btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.textContent ="Oh no! Il tuo Pokémon non è stato trovatoooo... Cliccami per una seconda chance! "
    pokemonContainer.appendChild(immagineErrore);
    pokemonContainer.appendChild(btn)
    
    
    btn.addEventListener("click", function() {
    location.reload();
    })
  }
  
}



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(a.textContent)


a.addEventListener("click", function() {
  array.push(a.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

b.addEventListener("click", function() {
  array.push(b.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

c.addEventListener("click", function() {
  array.push(c.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

d.addEventListener("click", function() {
  array.push(d.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

e.addEventListener("click", function() {
  array.push(e.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

f.addEventListener("click", function() {
  array.push(f.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

g.addEventListener("click", function() {
  array.push(g.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

h.addEventListener("click", function() {
  array.push(h.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

i.addEventListener("click", function() {
  array.push(i.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

j.addEventListener("click", function() {
  array.push(j.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

k.addEventListener("click", function() {
  array.push(k.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

l.addEventListener("click", function() {
  array.push(l.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

m.addEventListener("click", function() {
  array.push(m.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

n.addEventListener("click", function() {
  array.push(n.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

o.addEventListener("click", function() {
  array.push(o.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

p.addEventListener("click", function() {
  array.push(p.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

q.addEventListener("click", function() {
  array.push(q.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

r.addEventListener("click", function() {
  array.push(r.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

s.addEventListener("click", function() {
  array.push(s.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

t.addEventListener("click", function() {
  array.push(t.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

u.addEventListener("click", function() {
  array.push(u.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

v.addEventListener("click", function() {
  array.push(v.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

w.addEventListener("click", function() {
  array.push(w.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

x.addEventListener("click", function() {
  array.push(x.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

y.addEventListener("click", function() {
  array.push(y.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

z.addEventListener("click", function() {
  array.push(z.textContent);
  nome.value = array.join("")
  console.log(array)
  console.log(nome.value)
});

clear.addEventListener("click", function() {
  nome.value=""
  array = [];
})

space.addEventListener("click", function() {
  array.push(" ");
})



