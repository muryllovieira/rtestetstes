import React from 'react'
import './styleBotaoFormularioGlobal.css'


function BotaoFormularioGlobal({value, fun, disabled}) {
  
  return (
    <>
        <input disabled={disabled} className='botaoFormularioGlobal' type="submit" value={value} onChange={(e) => fun(e)}/>
    </>
  )
}

export default BotaoFormularioGlobal