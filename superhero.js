// Superhero Class
class Superhero {
  constructor(name, alias, power, universe, catchphrase, image) {
    this.name = name;
    this.alias = alias;
    this.power = power;
    this.universe = universe;
    this.catchphrase = catchphrase;
    this.image = image;
  }

  sayCatchphrase() {
    return `${this.alias}: "${this.catchphrase}"`;
  }
}

// Villain Class
class Villain {
  constructor(name, alias, evilPlan, universe, nemesis, image) {
    this.name = name;
    this.alias = alias;
    this.evilPlan = evilPlan;
    this.universe = universe;
    this.nemesis = nemesis;
    this.image = image;
  }

  revealPlan() {
    return `${this.alias} from ${this.universe} plans to ${this.evilPlan}!`;
  }
}

// Instantiating Superheroes
const hero1 = new Superhero(
  "Bruce Wayne",
  "Batman",
  "Peak human ability, genius intellect",
  "DC",
  "I am vengeance. I am the night!",
  "images/batman.jpg"
);

const hero2 = new Superhero(
  "Peter Parker",
  "Spider-Man",
  "Wall-crawling, spider sense, web shooters",
  "Marvel",
  "With great power comes great responsibility!",
  "images/spiderman.jpg"
);

// Instantiating Villains
const villain1 = new Villain(
  "Oswald Cobblepot",
  "The Penguin",
  "Take over Gotham's underworld",
  "DC",
  "Batman",
  "images/penguin.jpg"
);

const villain2 = new Villain(
  "Thanos",
  "Thanos the Mad Titan",
  "Collect all Infinity Stones and snap half the universe",
  "Marvel",
  "The Avengers",
  "images/thanos.jpg"
);

// DOM Output
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const heroes = [hero1, hero2];
  const villains = [villain1, villain2];

  heroes.forEach((hero) => {
    const div = document.createElement("div");
    div.className = "card hero";
    div.innerHTML = `
      <img src="${hero.image}" alt="${hero.alias}" class="card-img"/>
      <h2>${hero.alias}</h2>
      <p><strong>Real Name:</strong> ${hero.name}</p>
      <p><strong>Power:</strong> ${hero.power}</p>
      <p><strong>Universe:</strong> ${hero.universe}</p>
      <p class="catchphrase">"${hero.sayCatchphrase()}"</p>
    `;
    output.appendChild(div);
  });

  villains.forEach((villain) => {
    const div = document.createElement("div");
    div.className = "card villain";
    div.innerHTML = `
      <img src="${villain.image}" alt="${villain.alias}" class="card-img"/>
      <h2>${villain.alias}</h2>
      <p><strong>Real Name:</strong> ${villain.name}</p>
      <p><strong>Plan:</strong> ${villain.revealPlan()}</p>
      <p><strong>Nemesis:</strong> ${villain.nemesis}</p>
      <p><strong>Universe:</strong> ${villain.universe}</p>
    `;
    output.appendChild(div);
  });
});
