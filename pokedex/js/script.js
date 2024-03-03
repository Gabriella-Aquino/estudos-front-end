const pokemonNumber = document.querySelector('.pokemon-number') 
const pokemonName = document.querySelector('.pokemon-name')
const pokemonImg = document.querySelector('.pokemon-img')

// data pokemon
const fetchPokemon = async(pokemon) =>{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await apiResponse.json()
    return data
}

const renderPokemon = async(pokemon) =>{
    const data = await fetchPokemon(pokemon)
    pokemonNumber.textContent = `${data.id}`
    pokemonName.textContent = `${data.name}`
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

renderPokemon('9')