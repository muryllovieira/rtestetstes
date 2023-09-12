import React from 'react'
import LogoGoogle from '../../../../pages/login/images/googleLogo.svg'
import './styleBotaoLoginGoogle.css'

function BotaoLoginGoogle() {
  return (
    <>
        <div className='botaoLoginGoogle'>
            <img src={LogoGoogle} alt="" />
            <p>Entre com o Google</p>
        </div>
    </>
  )
}

export default BotaoLoginGoogle