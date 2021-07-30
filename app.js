const gestPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchpokemon = () => {

    const generatePokemonPromise = () => {}
    const pokemonPromises = []

    for (let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(gestPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {

            const listPokemons = pokemons.reduce((accumlator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                accumlator += `
                    <li class="card ${types[0]}">
                        <img class="card-image " alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
                        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                        <p class="card-subtitle">${types.join(" | ")}</p>
                    </li>
                `
                return accumlator
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]') 

            ul.innerHTML = listPokemons
        })
}
fetchpokemon()