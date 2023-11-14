import React from 'react'
import './styleSuaConta.css'
import setaEsquerda from '../images/setaEsquerda.svg'
import setaDireita from '../images/setaDireita.png'
import {Link} from 'react-router-dom'
import FotoPerfil from '../../../../../ui/components/global/FotoPerfil/FotoPerfil'

const SuaConta = () => {
  return (
    <>
      <div className='containerSuaConta'>

        <div className='containerSuaConta_header'>
          <Link to={'/menu/configuracoes'}>
            <img src={setaEsquerda} alt="" />
          </Link>
            <p className='sobre'>AJUDA E SUPORTE</p>
            <FotoPerfil/>
        </div>

        <div className='containerSuaConta_main'>
        
        <Link to={"/menu/configuracoes/sua-conta/alterar-email"}>
          <div className="botoesConfiguracao">
            <div className='textos'>
              <h1 className='titulo'>ALTERAR E-MAIL</h1>
              <img src={setaDireita} className='seta' />
            </div>
          </div>
        </Link>
        
        <Link to={"/menu/configuracoes/sua-conta/alterar-senha"}>
          <div className="botoesConfiguracao">
            <div className='textos'>
              <h1 className='titulo'>ALTERAR SENHA</h1>
              <img src={setaDireita} className='seta' />
            </div>
          </div>
        </Link>

        </div>

      </div>
    </>
  )
}

export default SuaConta