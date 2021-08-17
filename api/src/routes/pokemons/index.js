const { getData } = require('../../controller');
const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {

})

router.get('/(:idPokemon)?', async (req, res) => {

    // Debe traer solo los datos pedidos en la ruta de detalle de pokemon
    // Tener en cuenta que tiene que funcionar tanto para un id de un pokemon
    // existente en pokeapi o uno creado por ustedes
    
    const { name } = req.query;
    const { idPokemon } = req.params;

    try {
        const data = await getData(name || idPokemon);
        res.json(data)
    
        } catch (error) {
            res.send('No such pokemon')
    
        }
        
})

module.exports = router;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');