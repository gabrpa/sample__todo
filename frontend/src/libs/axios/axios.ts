import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3000/"
})

instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

}, (err) => {
    console.log(err);
})

export default instance;