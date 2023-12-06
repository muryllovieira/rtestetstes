// rfce
import React from 'react'
import './styleContainerHome.css'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import costureiraInicio from '../../../../pages/home/images/costureiraInicio.svg'

function ContainerHome() {
  return (
    <div className='containerHome'>
      <div className='containerHome__apresentacao'>
          <h2 className='containerHome__titulo'>Bem-vindo! Vamos  <font>costurar?</font></h2>
          <p className='containerHome__paragrafo'>Nossa solução foi feita para você, 
            que costura ou necessita de alguém para costurar...
          </p>
      </div>
      <div className='containerHome__containerBotoes'>

        <BotaoAncoraGlobal
          link={true}
          titulo={'LOGIN'}
          url={'/login'}
          alternado={false}
        ></BotaoAncoraGlobal>

        <BotaoAncoraGlobal
          link={true}
          titulo={'REGISTRAR'}
          url={'/registrar'}
          alternado={true}
        ></BotaoAncoraGlobal>

      </div>

      <img className='containerHome__imagemCostureira' src={costureiraInicio} alt="" />
      
    </div>
  )
}

export default ContainerHome