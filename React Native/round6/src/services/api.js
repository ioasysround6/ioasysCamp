import axios from "axios";

const api = axios.create({
    baseURL: "https://cobe-backend.herokuapp.com/api/"
})

export default api; 