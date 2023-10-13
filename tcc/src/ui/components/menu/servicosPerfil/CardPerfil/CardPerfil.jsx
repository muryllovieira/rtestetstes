import React from 'react'
import './styleCardPerfil.css'

function CardPerfil({img, nome}) {
  return (
    <div className="tagPerfil">
        <img src={img} className="imagemPerfil" />
        <p className='nomePerfil'>{nome}</p>
    </div>
  )
}

export default CardPerfil