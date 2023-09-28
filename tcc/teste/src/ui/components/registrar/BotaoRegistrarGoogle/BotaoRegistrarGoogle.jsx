import React from 'react'
import LogoGoogle from '../../../../pages/registrar/images/googleLogo.svg'
import './styleBotaoRegistrarGoogle.css'

function BotaoRegistrarGoogle() {
  return (
    <>
        <div className='botaoRegistrarGoogle'>
            <img src={LogoGoogle} alt="" />
            <p>Registre-se com o Google</p>
        </div>
    </>
  )
}

export default BotaoRegistrarGoogle