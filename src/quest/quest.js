import axios from "axios";



const instance = axios.create({
    baseURL: ' https://mock.presstime.cn/mock/62aadbd40a8ecd0022c87ffc',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



  export default instance