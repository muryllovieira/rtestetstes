import axios from "axios"

const blogFetch = axios.create({

    baseURL: "http://localhost:8080",
    headers: {'Content-Type': 'application/json'}
})

export const localizacaoFetch = axios.create({
    baseURL: "http://enderecos.metheora.com",
    headers: {'Content-Type': 'application/json'}
})

// costurieapp.azurewebsites.net
// https://super-hare-shoulder-pads.cyclic.cloud
//  http://10.107.144.8:3000
// http://10.107.144.17:3000

export default blogFetch