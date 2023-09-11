import React from 'react'
import { Link } from 'react-router-dom'
import './styleFormularioLogin.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoLoginGoogle from '../BotaoLoginGoogle/BotaoLoginGoogle'

function FormularioLogin() {
  return (
    <div className='formularioLogin'>
      <h1>LOGIN</h1>

      <div className='formularioLogin__containerInputs'>

        <InputGlobal
         type={'text'}
         placeholder={'Email'}
        ></InputGlobal>

        <InputGlobal
          type={'password'}
          placeholder={'Senha'}
        ></InputGlobal>

        <Link to="/recuperar-senha" className='containerInputs__textoDestacado'>Esqueceu a senha?</Link>

      </div>

      <BotaoFormularioGlobal
        value={'LOGIN'}
      ></BotaoFormularioGlobal>

      <div className='formularioLogin__separacaoOu'>
        <div className='separacaoOu__linhaPreta'></div>
        <span>Or</span>
        <div className='separacaoOu__linhaPreta'></div>
      </div>

      <BotaoLoginGoogle></BotaoLoginGoogle>

      <BotaoAncoraGlobal
        titulo={'REGISTRAR'}
        url={'/registrar'}
        alternado={false}
      ></BotaoAncoraGlobal>
      
    </div>
  )
}

export default FormularioLogin