const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Pokemon, Type } = require("../db.js");
const {getFromApi, loadFromDb} = require('./utils.js');


// MAIN ROUTE
router.get('/', async (req, res, next) => {
  const { name } = req.query;  

  if (name) {
    try {
      const pokemonDb = await Pokemon.findOne({
        where: { name: name.toLowerCase() },
        include: Type,
      });
      if(!pokemonDb) {    
            const myPokemon = await getFromApi(name);            
            res.send(myPokemon);
        }        
        const myPokemonDb = loadFromDb(pokemonDb);      
        res.send(myPokemonDb);
    } catch (error) {
        res.status(404).send("No se encontro pokemon: "+ error);
    }
  }

//--------------------------------------------------------------------------//
    try {
    const infoDb = await Pokemon.findAll({include: Type});
    const pokemonDb = infoDb.map(p => {
        return {
            name: p.name,
            image: p.image,
            types: p.types.map(e => e.name),
            str: p.str,
            id: p.id,
            spd: p.spd,
            hp: p.hp,
            def: p.def,
            createdInDb: p.createdInDb
        }
    });
    const random = () => {
        return Math.floor(111*Math.random());
    }
    
    const infoApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${random()}&limit=40`);
    let pokemonUrl = infoApi.data.results.map(e => {
        return axios.get(e.url);
    });   
 
    const pokemonInfo = await Promise.all(pokemonUrl);    
    const pokemonApi = pokemonInfo.map(e => {
        return {
            name: e.data.name,
            image: e.data.sprites.other.dream_world.front_default,
            types: e.data.types.map(e => e.type.name),
            str: e.data.stats[1].base_stat,
            id: e.data.id,
            spd: e.data.stats[5].base_stat,
            hp: e.data.stats[0].base_stat,
            def: e.data.stats[2].base_stat
        }
    })

    const myPokemon = pokemonDb.concat(pokemonApi);
    res.send(myPokemon);
    } catch(error){
        next(error);
    }
});

router.get('/:id',async (req,res,next) => {
    const { id } = req.params;
    console.log(id);
    

    if(id.includes('-')){
        try {
            const pokemonDb = await Pokemon.findByPk(id, {include: Type});    
            const myPokemonDb = loadFromDb(pokemonDb);
          
            if(myPokemonDb) return res.json(myPokemonDb);          
        } catch(error){
            next(error);
        }
    }else{
        try{
            const myPokemon = await getFromApi(id); 
            res.send(myPokemon);
        }catch(error){
            next(error);
        }
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {name, image, hp, str, def, spd, height, weight, types } = req.body;
        const pokemon = await Pokemon.create({ name: name.toLowerCase(), image, hp, str, def, spd, height, weight})
        
        await pokemon.addTypes(types);
        res.status(201).send("Pokemon creado con exito")
        }catch(error){
            res.status(404).send("Fallo la creacion de tu pokemon:" + error)
        }    
})

module.exports = router;