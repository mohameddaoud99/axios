const axios = require('axios')

const requestOne = axios.get(
    'http://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=e0346c02e31f8ed0b9e5d4e995d6eec9');
    const requestTwo = axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e0346c02e31f8ed0b9e5d4e995d6eec9');
        const requestThree = axios.get(
            'http://api.openweathermap.org/data/2.5/weather?q=London&appid=e0346c02e31f8ed0b9e5d4e995d6eec9');


axios
  .all([
    requestOne, 
      requestTwo,
       requestThree])
  .then(
      axios.spread((
          firstRequest, 
          secondRequest, 
          thirdRequest) => {
      console.log(firstRequest.data,secondRequest.data, thirdRequest.data);
    })
  )
   .catch(errors => {
    console.error(errors);
   });