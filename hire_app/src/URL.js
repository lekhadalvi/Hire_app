import axios from "axios";


 const api = axios.create({
    baseURL:"https://69371075f8dc350aff3340e9.mockapi.io/hire",
    headers:{
        "Content-Type":"application/json",
    }
});
export default api;