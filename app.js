const fetchpokemon = () => {
    const gestPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    for (let i = 1; i <= 150; i++) {
        fetch(url).then(response => response.json())
    }

    fetch(gestPokemonUrl)
        .then(response => response.json())
        .then( pokemon => {
            console.log(pokemon)
        })
}
fetchpokemon()