import axios from "axios"

const blogFetch = axios.create({
    baseURL: "http://192.168.0.6:8080",
    headers: {'Content-Type': 'application/json'}
})


// https://super-hare-shoulder-pads.cyclic.cloud
//  http://10.107.144.8:3000
// http://10.107.144.17:3000

export default blogFetch