import axios from "axios"

const blogFetch = axios.create({
    baseURL: "http://10.107.144.10:3000",
    headers: {'Content-Type': 'application/json'}
})

export default blogFetch