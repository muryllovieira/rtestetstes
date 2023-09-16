import axios from "axios"

export const ApiService = axios.create({
    baseURL: "https://super-hare-shoulder-pads.cyclic.cloud/",
    headers: {'Content-Type': 'application/json'},
})