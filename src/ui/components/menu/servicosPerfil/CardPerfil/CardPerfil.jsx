import React from 'react'
import './styleCardPerfil.css'

function CardPerfil({onClick, img, nome}) {
  return (
    <div onClick={onClick} className="tagPerfil">
        <img src={img} className="imagemPerfil" />
        <p className='nomePerfil'>{nome}</p>
    </div>
  )
}

export default CardPerfil