import React from 'react'
import './stylePersonalizarLocalizacao.css'
import FormularioPersonalizarLocalizacao from '../../../../ui/components/personalizarPerfil/FormularioPersonalizarLocalizacao/FormularioPersonalizarLocalizacao.jsx'

function PersonalizarLocalizacao() {
  return (
    <>
      <div className='containerPersonalizarLocalizacao'>
        <div className="containerPersonalizarLocalizacao__formularioPersonalizarLocalizacao">
          <FormularioPersonalizarLocalizacao></FormularioPersonalizarLocalizacao>
        </div>
      </div>
    </>
  )
}

export default PersonalizarLocalizacao