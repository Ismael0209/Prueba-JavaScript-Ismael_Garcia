fetch("https://pokeapi.co/api/v2/pokemon/ditto")


  .then((response) => response.json())
  .then((data) => {
    var elemento = document.getElementById("ditto");
    elemento.innerHTML = `<h1>Pokemon: </h1>
                          <h3>${data.name}</h3>
                          <h1>Número de pokemon: </h1>
                          <p>${data.order}</p>
   
  <img height=200 width=200 src='${data.sprites.front_default}'/>
  <br>
  <h1>Habilidades Aprendidas: </h1>
  `;

    for (let i = 0; i < data.abilities.length; i++) {
      elemento.innerHTML += `<li>${data.abilities[i].ability.name}</li>`;
    }

    console.log(data);
  })
  .catch((err) => console.log(err));
