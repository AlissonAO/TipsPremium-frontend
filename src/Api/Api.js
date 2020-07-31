import axios from 'axios';


const api = axios.create({
// baseURL: 'http://18.231.164.106:8080',
   baseURL: process.env.REACT_APP_API_URL,
// baseURL: 'https://tipspremium-backend.herokuapp.com/',
});


export default api;
