import React, { useContext } from 'react'
import './styleAlterarSenha.css'
import {Link} from 'react-router-dom'
import setaEsquerda from '../images/setaEsquerda.svg'
import FormularioTrocaDeSenha from '../../../../../ui/components/trocaDeSenha/FormularioTrocaDeSenha.jsx'
import UserContext from '../../../../../data/hooks/context/UserContext'

const AlterarSenha = () => {

  const {id} = useContext(UserContext)

  return (
    <>
      <div className='containerAlterarSenha'>

        <div className='containerAlterarSenha_header'>
          <Link to={'/menu/configuracoes/sua-conta'}>
            <img src={setaEsquerda} alt="" />
          </Link>
            <p className='sobre'>SUA CONTA - ALTERAR SENHA</p>
            <div className='tituloEFoto__cardFoto'></div>
        </div>

        <div className='containerAlterarSenha_main'></div>
          <FormularioTrocaDeSenha
            id={id}
          />
      </div>
    </>
  )
}

export default AlterarSenha