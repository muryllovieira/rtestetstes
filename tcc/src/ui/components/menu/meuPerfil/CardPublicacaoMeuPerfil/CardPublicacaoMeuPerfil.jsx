import React, { useState, useEffect, useContext } from 'react'
import './styleCardPublicacaoMeuPerfil.css'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import ModalMinhaPublicacao from '../ModalMinhaPublicacao/ModalMinhaPublicacao'
import blogFetch from '../../../../../data/services/api/ApiService'
import UserContext from '../../../../../data/hooks/context/UserContext'

function CardPublicacaoMeuPerfil() {

  const {accessToken} = useContext(UserContext)
  const {id} = useContext(UserContext)

  const [perfil, setPerfil] = useState(null)

  const getUsuario = async () => {
    try {
      const response = await blogFetch.get(`/usuario/meu_perfil/${id}`, {
        headers: {
          'x-access-token' : accessToken
        }
      })

      setPerfil(response.data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <div className="cardPublicacaoMeuPerfil" onClick={() => setOpenModal(true)}>

        <ModalMinhaPublicacao isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>

        {
          perfil === undefined ? (
            <p>Carregando...</p>
          ) : (
            perfil.usuario.map((data) => (
              data.publicacoes.map((item) => (
                  <>
                  <div className="cardPublicacaoMeuPerfil__containerImagemPublicacao" key={data.id}>
                    <img className='containerImagemPublicacao__imagemFundo' src={FundoImagemPerfil} alt="" />
                    <img className='containerImagemPublicacao__imagemPublicacao' src={item.anexo} alt="" />
                  </div>
  
                  <p className='cardPublicacaoMeuPerfil__nomeUsuario'>{item.titulo}</p>
                  <p className='cardPublicacaoMeuPerfil__tituloPublicacao'>{item.descricao}</p>
                  </>
              ))
            ))
          )
        }


                 
            
        </div>
    </>
  )
}

export default CardPublicacaoMeuPerfil