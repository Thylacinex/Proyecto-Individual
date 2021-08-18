const { getData } = require('../../controller');
const { Router } = require('express');
const router = Router();

router.get('/:idPokemon?', async (req, res) => {
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

router.post('/', (req, res) => {
    const { name, id, weight, height, types, hp, attack, defense, speed} = req.body;

    res.send(`Pokemon creado ${name}`);
});

// { 
//     "name": "Pokecustom", 
//     "id": 666, 
//     "weight": "48", 
//     "height": "48", 
//     "types": ["Fire"], 
//     "hp": "48", 
//     "attack": "48", 
//     "defense": "48", 
//     "speed": "48"
// }

module.exports = router;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');