const axios = require('axios');

const getVillagers = () => {
  var option = {
    method: 'GET',
    url: 'http://acnhapi.com/v1/villagers'
  }
  return axios(option);
}

module.exports.getVillagers = getVillagers;