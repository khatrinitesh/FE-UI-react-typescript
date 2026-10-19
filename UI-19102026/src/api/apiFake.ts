import axios from "axios";

const apiFake = axios.create({
    baseURL:import.meta.env.VITE_API_FAKESTORE,
    headers:{
        "Content-Type":"application/json"
    }
})
export default apiFake;