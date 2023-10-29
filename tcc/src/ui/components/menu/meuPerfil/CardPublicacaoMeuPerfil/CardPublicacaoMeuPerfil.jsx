import React, { useState, useEffect, useContext } from 'react'
import './styleCardPublicacaoMeuPerfil.css'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import ModalMinhaPublicacao from '../ModalMinhaPublicacao/ModalMinhaPublicacao'
import blogFetch from '../../../../../data/services/api/ApiService'
import UserContext from '../../../../../data/hooks/context/UserContext'

function CardPublicacaoMeuPerfil({idPublicacao, nomePublicacao, descricaoPublicacao}) {


  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <ModalMinhaPublicacao isOpen={openModal} setModalOpen={setOpenModal}/>

       <div key={idPublicacao} className="cardPublicacaoMeuPerfil" onClick={() => setOpenModal(true)}>

        

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