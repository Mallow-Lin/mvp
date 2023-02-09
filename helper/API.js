const axios = require('axios');

const getInfo = (url) => {
  var option = {
    method: 'GET',
    url: url
  }
  return axios(option);
}

module.exports.getInfo = getInfo;