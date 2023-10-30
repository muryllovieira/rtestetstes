import React, { useState, useEffect, useContext } from 'react'
import './styleCardPublicacaoMeuPerfil.css'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import ModalMinhaPublicacao from '../ModalMinhaPublicacao/ModalMinhaPublicacao'
import blogFetch from '../../../../../data/services/api/ApiService'
import UserContext from '../../../../../data/hooks/context/UserContext'

function CardPublicacaoMeuPerfil({idPublicacao, nomePublicacao, descricaoPublicacao, accessToken}) {


  const [openModal, setOpenModal] = useState(false)

  const [ publicacao, setPublicacao ] = useState()

  const pegarPublicacao = async () => {
    try {
      const response = await blogFetch.get(`/publicacao/select_by_id/${idPublicacao}`, {
        headers: {
          'x-access-token': accessToken
        }
      })

      setPublicacao(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ModalMinhaPublicacao dadosPublicacao={publicacao} idPublicacao={idPublicacao} accessToken={accessToken} isOpen={openModal} setModalOpen={setOpenModal}/>

      <div key={idPublicacao} className="cardPublicacaoMeuPerfil" onClick={() => {
        setOpenModal(!openModal)
        pegarPublicacao()
      }}>

        <p className='cardPublicacaoMeuPerfil__tituloPublicacao'>
          {nomePublicacao}
        </p>

        <p className='cardPublicacaoMeuPerfil__descricaoUsuario'>
          {descricaoPublicacao}
        </p>
            
      </div>
    </>
  )
}

export default CardPublicacaoMeuPerfil