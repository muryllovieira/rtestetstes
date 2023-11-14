import React, { useContext } from 'react'
import './styleAlterarEmail.css'
import {Link} from 'react-router-dom'
import setaEsquerda from '../images/setaEsquerda.svg'
import FormularioTrocaDeEmail from '../../../../../ui/components/trocaDeEmail/FormularioTrocaDeEmail'
import UserContext from '../../../../../data/hooks/context/UserContext'
import FotoPerfil from '../../../../../ui/components/global/FotoPerfil/FotoPerfil'

const AlterarEmail = () => {

  const {id} = useContext(UserContext)

  return (
    <>
      <div className='containerAlterarEmail'>

        <div className='containerAlterarEmail_header'>
          <Link to={'/menu/configuracoes/sua-conta'}>
            <img src={setaEsquerda} alt="" />
          </Link>
            <p className='sobre'>SUA CONTA - ALTERAR E-MAIL</p>
            <FotoPerfil/>
        </div>

        <div className='containerAlterarEmail_main'>
          <FormularioTrocaDeEmail
            id={id}
          />
        </div>

      </div>
    </>
  )
}

export default AlterarEmail