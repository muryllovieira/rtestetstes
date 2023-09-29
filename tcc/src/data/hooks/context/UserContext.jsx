import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [accessToken, setAccessToken] = useState("")
    const [ id, setId ] = useState("")

    const [ nome, setNome ] = useState("")
    const [ foto, setFoto ] = useState("")
    const [ descricao, setDescricao ] = useState("")

    const [ estado, setEstado ] = useState("")
    const [ cidade, setCidade ] = useState("")
    const [ bairro, setBairro ] = useState("")

    const userData = {
        id: 71,
        nome: nome,
        foto: foto,
        descricao: descricao
    }

    const userLocation = {
        id_usuario: id,
        estado: estado,
        cidade: cidade,
        bairro: bairro
    }

    // useEffect(() => {
    //     console.log(userData)
    //   }, [nome])

    return <UserContext.Provider value={
        {accessToken, setAccessToken, id, setId, nome, setNome, foto, setFoto, descricao, setDescricao, estado, setEstado, cidade, setCidade, bairro, setBairro, userData}
        }>
        {children}
    </UserContext.Provider>
}

export default UserContext
