import React from 'react'
import './styleBotaoFormularioGlobal.css'

function BotaoFormularioGlobal({value}) {
  return (
    <>
        <input className='botaoFormularioGlobal' type="submit" value={value}/>
    </>
  )
}

export default BotaoFormularioGlobal