import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-cc14f.firebaseio.com/'
});

export default instance;
