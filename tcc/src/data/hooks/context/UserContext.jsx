import { createContext, useState, useEffect } from "react";
import blogFetch from "../../services/api/ApiService";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {



    const idLocalStorage = JSON.parse(window.localStorage.getItem('id'))
    const accessTokenLocalStorage = JSON.parse(window.localStorage.getItem('accessToken'))

    const [accessToken, setAccessToken] = useState(accessTokenLocalStorage)
    const [id, setId] = useState(idLocalStorage)

    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const [descricao, setDescricao] = useState("")


    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")


    const [idServico, setIdServico] = useState(0)
    const [nomeTagServico, setNomeTagServico] = useState('')

    const [idPerfil, setIdPerfil] = useState(0)

    const userData = {
        id: id,
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

    const pegarUsuario = async () => {

        try {
            const response = await blogFetch.get(`/usuario/meu_perfil/${id}`, {
                headers: {
                    'x-access-token': accessToken
                }
            })

            setNome(response.data.usuario.nome)
            setFoto(response.data.usuario.foto)
            setDescricao(response.data.usuario.descricao)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        pegarUsuario()
    }, [id])

    useEffect(() => {
        pegarUsuario()
    }, [idPerfil])

    useEffect(() => {
        console.log(id, nome, foto, descricao, estado, cidade, bairro)
    }, [id])

    // useEffect(() => {
    //     console.log(userLocation)
    //   }, [estado, cidade, bairro])

    return <UserContext.Provider value={
        {
            userData,
            userLocation,
            accessToken,
            setAccessToken,
            id,
            setId,
            nome,
            setNome,
            foto,
            setFoto,
            descricao,
            setDescricao,
            estado,
            setEstado,
            cidade,
            setCidade,
            bairro,
            setBairro,
            idServico,
            setIdServico,
            nomeTagServico,
            setNomeTagServico,
            idPerfil,
            setIdPerfil,
        }
    }>
        {children}
    </UserContext.Provider>
}

export default UserContext
