import axios from 'axios';

const apiKey = "6jZRzGffPaxMHHWt7VDI7KzHl9yzJ3H2"
// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const giphy = axios.create({ //Se crea una instancia de axios
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
      api_key: apiKey
  }

}) 
export default giphy
// giphy.get('/random')
// .then(resp => {
//     const {data} = resp.data
//     const {url} = data.images.original
//     console.log(url);
// })

// axios.get("https://jsonplaceholder.typicode.com/photos")
// .then(res => console.log(res))
// .catch(error => console.log(error.response.data))