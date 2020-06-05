import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learn-words-594e1.firebaseio.com/',
});

export default instance;