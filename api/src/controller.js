const BASE_URL = `https://pokeapi.co/api/v2`; //?limit=${limit}&offset=${offset} const limit = 1; const offset = 9;
const axios = require('axios');

// If id or name is set, makes an axios call with that data an format the output Obj.

const getData = (idOrName = '') => {
    
    return axios
            .get(`${BASE_URL}/pokemon/${idOrName}`)
            .then(res => {
                if(idOrName) {
                    const { name, id, types } = res.data;
                    return { name, id, types };
                } 
                return res.data;
            });

};

const getTypes = () => {
    return axios
              .get(BASE_URL + '/type')
              .then(res => {
                return res.data.results.map(t => t.name)
              });
            
}

module.exports = { getData, getTypes };