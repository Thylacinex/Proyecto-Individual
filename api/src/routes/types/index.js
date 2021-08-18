const { getTypes } = require('../../controller');
const { Router } = require('express');
const axios = require('axios');

//const BASE_URL = `https://pokeapi.co/api/v2`;

const router = Router();

router.get('/', async (req, res) => {
        
    try {
        const data = await getTypes();
        res.json(data)

    } catch (error) {
        console.log(error)

    }

})

module.exports = router;