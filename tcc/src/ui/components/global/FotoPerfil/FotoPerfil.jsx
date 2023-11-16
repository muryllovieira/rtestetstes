import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../data/services/api/ApiService'
import './styleFotoPerfil.css'

const FotoPerfil = () => {

  const {accessToken}  = useContext(UserContext)
  const {id} = useContext(UserContext)

  const [user, setUser] = useState(null)

  const getUsuario = async () => {
    const response = await blogFetch.get(`/usuario/meu_perfil/${id}`, {
      headers: {
        'x-access-token' : accessToken
      }
    })

    setUser(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    if(id != undefined){
      getUsuario()
    } else {
      null
    }
  }, [])

  return (
    <>
    {
      user === null ? (
        <p></p>
      ) : (
        <Link to={"/menu/meu-perfil"}>
          <div className='cardFoto'>
             <img className='foto_Perfil' src={user.usuario.foto} alt="" />
          </div>
        </Link>
      )
    }
    </>
  )
}

export default FotoPerfil