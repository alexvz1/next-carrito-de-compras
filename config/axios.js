import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: 'http://127.0.0.1:5001/api/'
});

export default AxiosClient;