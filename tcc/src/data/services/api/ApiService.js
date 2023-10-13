import axios from "axios"

const blogFetch = axios.create({
    baseURL: "https://super-hare-shoulder-pads.cyclic.cloud",
    headers: {'Content-Type': 'application/json'}
})


// https://super-hare-shoulder-pads.cyclic.cloud
//  http://10.107.144.10:3000

export default blogFetch