import axios from 'axios';

const instance = axios.create({
    baseURL: "http://103.200.20.187:8080/api", 
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});
export default instance;
