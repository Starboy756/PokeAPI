// fetch() = used to make HTTP Request to fetch Resources.
//           (JSON style data images and files
//            Simplifies Asynchronus Data Fetching in JS
//          and used for interacting with APIs to retrieve and
//          send data asynchronusly over the web
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Could Not Fetch Resources");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.id))
//   .catch(error => console.log(error));

async function fetchData() {
  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();



    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could Not Fetch Resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("pokemonSprite");

    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";

  } catch (error) {
    console.error(error);
  }
}
