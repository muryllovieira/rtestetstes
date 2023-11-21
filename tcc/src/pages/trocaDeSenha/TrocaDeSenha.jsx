import React from 'react'
import './styleTrocaDeSenha.css'
import FormularioTrocaDeSenha from '../../ui/components/trocaDeSenha/FormularioTrocaDeSenha'
import BotaoFormularioGlobal from '../../ui/components/global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import UserContext from '../../data/hooks/context/UserContext'
import { useContext } from 'react'

function TrocaDeSenha() {

  const { id } = useContext(UserContext)

  return (
    <>

      <div className='containerTrocaDeSenha'>

        <div className='containerTrocaDeSenha__containerFormulario'>

          <div className='containerFormulario__headerFormulario'>

            <div className='headerFormulario__iconeVoltarFormulario'></div>
            <h1 className='headerFormulario__tituloFormulario'>ALTERAR SENHA</h1>

          </div>

          {

            id === undefined ? (
              <p>Sem ID</p>
            ) : (
              <FormularioTrocaDeSenha
                id={id}
              ></FormularioTrocaDeSenha>
            )

          }


        </div>

      </div>

    </>
  )
}

export default TrocaDeSenha