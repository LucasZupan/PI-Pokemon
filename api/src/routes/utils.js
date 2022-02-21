const axios = require("axios");

async function getFromApi(value){
    const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
    const result = {
        id: pokemonApi.data.id,
        name: pokemonApi.data.name,             
        image: pokemonApi.data.sprites.other.dream_world.front_default,
        hp: pokemonApi.data.stats[0].base_stat,
        str: pokemonApi.data.stats[1].base_stat,
        def: pokemonApi.data.stats[2].base_stat,
        spd: pokemonApi.data.stats[5].base_stat,
        height: pokemonApi.data.height,
        weight: pokemonApi.data.weight,
        types: pokemonApi.data.types.map(e => e.type.name)        
    }
    return result;
}

function loadFromDb(value){ 
    const result = {
        id: value.id,
        name: value.name,             
        image: value.image,
        hp: value.hp,
        str: value.str,
        def: value.def,
        spd: value.spd,
        height: value.height,
        weight: value.weight,
        types: value.types.map(e => e.name)        
    }  
    return result;
}

module.exports = {getFromApi, loadFromDb};

