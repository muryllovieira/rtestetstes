import React from 'react'
import './stylePersonalizarNome.css'
import FormularioPersonalizarNome from '../../../../ui/components/personalizarPerfil/FormularioPersonalizarNome/FormularioPersonalizarNome'
import { useState, useContext } from 'react'
import UserContext from '../../../../data/hooks/context/UserContext'


function PersonalizarNome() {



  return (
    <>
        {/* SVG Absolute */}
            
        {/* SVG Absolute */}
    
        <div className="containerPersonalizarNome">

            <div className="containerPersonalizarNome__formularioPersonalizarNome">
                <FormularioPersonalizarNome
                 
                ></FormularioPersonalizarNome>
            </div>

        </div>
    
    </>
  )
}

export default PersonalizarNome