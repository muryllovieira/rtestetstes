import React from 'react'
import './styleBotaoTipoPerfil.css'

function BotaoTipoPerfil({text, icon, option, setValue}) {



  return (
    <>

        <div onClick={setValue} className={`botaoTipoPerfil ${option ? "botaoTipoPerfilAtivo" : ""}`}>
            <i>{icon}</i>
            <p>{text}</p>
        </div>

    </>
  )
}

export default BotaoTipoPerfil