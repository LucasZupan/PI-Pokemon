const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const axios = require('axios');
const PokemonRoutes = require('./pokemonRoutes');
const TypeRoutes = require('./typeRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonRoutes);
router.use('/types', TypeRoutes);

module.exports = router;
