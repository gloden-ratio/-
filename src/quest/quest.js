import axios from "axios";

const instance = axios.create({
    baseURL: ' https://picsum.photos',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

const mm = axios.create({
  
  baseURL: 'https://api.thecatapi.com/v1/images/search',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
  export { instance,mm} 