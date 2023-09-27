import axios from "axios"

const blogFetch = axios.create({
    baseURL: "https://super-hare-shoulder-pads.cyclic.cloud",
    headers: {'Content-Type': 'application/json'}
})

export default blogFetch