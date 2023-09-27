import axios from "axios"

const blogFetch = axios.create({
    baseURL: "http://10.107.144.10:3000",
    headers: {'Content-Type': 'application/json'}
})


// https://super-hare-shoulder-pads.cyclic.cloud

export default blogFetch