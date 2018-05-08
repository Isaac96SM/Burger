import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-42129.firebaseio.com/'
});

export default instance;