import React, { useState } from 'react'
import ModalPublicar from '../../../../ui/components/menu/publicar/modalPublicar/ModalPublicar'
import FormularioPublicacao from '../../../../ui/components/menu/publicar/FormularioPublicacao/FormularioPublicacao'
import './stylePublicar.css'
import { useNavigate } from 'react-router-dom'

function Publicar() {

  const navigate = useNavigate()

  return (
    
      <>
        <div></div>
        <div>
          <ModalPublicar>
            <FormularioPublicacao></FormularioPublicacao>
          </ModalPublicar>
        </div>
       
      </>
    
    
  )
}

export default Publicar