import React from 'react'
import './stylePersonalizarNome.css'
import FormularioPersonalizarNome from '../../../../ui/components/personalizarPerfil/FormularioPersonalizarNome/FormularioPersonalizarNome'
import { useState } from 'react'

function PersonalizarNome({idUser}) {


  const userData = {
    id: idUser,
    nome: '',
    foto: '',
    descricao: ''
  }

  return (
    <>
        {/* SVG Absolute */}
            
        {/* SVG Absolute */}
    
        <div className="containerPersonalizarNome">

            <div className="containerPersonalizarNome__formularioPersonalizarNome">
                <FormularioPersonalizarNome
                  userData={userData}
                ></FormularioPersonalizarNome>
            </div>

        </div>
    
    </>
  )
}

export default PersonalizarNome