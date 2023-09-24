import React from 'react'
import "./styleFotoPerfil.css"
import fotoPerfil from "../../../../pages/registrar/personalizarPerfil/personalizarFoto/images/fotoDePerfil.svg"


function FotoPerfil() {
  return (
        <label className='picture'>
            <input type="file" accept='image/*' className='picture__input' id='picture__input'/>
            <img src={fotoPerfil} className='picture__image' />
        </label>
  )
}

export default FotoPerfil