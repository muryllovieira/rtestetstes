import React from 'react'
import { Outlet } from 'react-router-dom'
import './styleConfiguracoes.css'
import setaDireita from './images/setaDireita.png'

function Configuracoes() {
  return (
    <>
      <Outlet/>
      <div className='containerConfiguracoes'>

        <div className='containerExplorar__tituloEFoto'>
            <p>
              Configuracoes
            </p>
          <div className='tituloEFoto__cardFoto'></div>
        </div>

      <div className='containerConfiguracoes_main'>
        <div className="botoesConfiguracao">
          <h1 className='titulo'>Aparência</h1>
        </div>
        <div className="botoesConfiguracao"><h1 className='titulo'>Aparência</h1></div>
        <div className="botoesConfiguracao"><h1 className='titulo'>Aparência</h1></div>
        <div className="botoesConfiguracao"><h1 className='titulo'>Aparência</h1></div>
        <div className="botoesConfiguracao"><h1 className='titulo'>Aparência</h1></div>
      </div>

      </div>

      <div className='containerConfiguracoes_footer'></div>
    </>
  )
}

export default Configuracoes