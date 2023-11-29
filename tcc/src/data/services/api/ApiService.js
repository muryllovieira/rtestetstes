import axios from "axios"

const blogFetch = axios.create({
<<<<<<< HEAD
    baseURL: "http://192.168.0.6:3000",
=======
    baseURL: "http://10.107.144.8:3000",
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798
    headers: {'Content-Type': 'application/json'}
})


// https://super-hare-shoulder-pads.cyclic.cloud
//  http://10.107.144.8:3000
// http://10.107.144.17:3000

export default blogFetch