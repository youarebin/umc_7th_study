import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        
    },
    baseURL: 'http://localhost:3000/todo',
});

export {axiosInstance}