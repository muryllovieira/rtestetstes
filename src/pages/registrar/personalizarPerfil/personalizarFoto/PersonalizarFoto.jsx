import React from 'react'
import "./stylePersonalizarFoto.css"
import FormularioPersonalizarFoto from '../../../../ui/components/personalizarPerfil/FormularioPersonalizarFoto/FormularioPersonalizarFoto'

function PersonalizarFoto() {
  return (
    <>
    <div className='containerPersonalizarFoto'>

      <div className='containerPersonalizarFoto__formularioPersonalizarFoto'>
        <FormularioPersonalizarFoto></FormularioPersonalizarFoto>
      </div>

    </div>
    </>
  )
}

export default PersonalizarFoto