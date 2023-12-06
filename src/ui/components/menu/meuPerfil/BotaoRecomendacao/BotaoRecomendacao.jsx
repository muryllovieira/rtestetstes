import React from 'react'
import { Link } from 'react-router-dom'
import './styleBotaoRecomendacao.css'


function BotaoRecomendacao({url, value}) {
  return (
    <>
    
      <Link className='botaoRecomendacao' to={url}>
        {value}
      </Link>

    </>
  )
}

export default BotaoRecomendacao