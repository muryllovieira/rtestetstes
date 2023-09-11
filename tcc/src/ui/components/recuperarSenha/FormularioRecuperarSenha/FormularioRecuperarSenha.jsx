import React from 'react'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import './styleFormularioRecuperarSenha.css'

function FormularioRecuperarSenha() {
  return (
    <div className='formularioRecuperarSenha'>
        <h1>RECUPERAR SENHA</h1>

        <p>Insira seu e-mail para o processo de verificação, vamos mandar um código para o seu e-mail.</p>

        <InputGlobal
            type={'text'}
            placeholder={'Email'}
        ></InputGlobal>

        <BotaoFormularioGlobal
        value={'ENVIAR'}
        ></BotaoFormularioGlobal>

    </div>
  )
}

export default FormularioRecuperarSenha