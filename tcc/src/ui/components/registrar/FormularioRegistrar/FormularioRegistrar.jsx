import React from 'react'
import { Link } from 'react-router-dom'
import './styleFormularioRegistrar.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoRegistrarGoogle from '../BotaoRegistrarGoogle/BotaoRegistrarGoogle'

function FormularioRegistrar() {
  return (
    <div className='formularioRegistrar'>
      <h1>REGISTRAR</h1>

      <div className='formularioRegistrar__containerInputs'>

        <InputGlobal
         type={'text'}
         placeholder={'Email'}
        ></InputGlobal>

        <InputGlobal
          type={'password'}
          placeholder={'Senha'}
        ></InputGlobal>

        <InputGlobal
          type={'password'}
          placeholder={'Repita a senha'}
        ></InputGlobal>

        <InputGlobal
          type={'text'}
          placeholder={'Digite um nome de usuário'}
        ></InputGlobal>

      </div>

      <BotaoFormularioGlobal
        value={'REGISTRAR'}
      ></BotaoFormularioGlobal>

      <div className='formularioRegistrar__separacaoOu'>
        <div className='separacaoOu__linhaPreta'></div>
        <span>Or</span>
        <div className='separacaoOu__linhaPreta'></div>
      </div>

      <BotaoRegistrarGoogle></BotaoRegistrarGoogle>

      <BotaoAncoraGlobal
        titulo={'LOGIN'}
        url={'/login'}
        alternado={false}
      ></BotaoAncoraGlobal>
      
    </div>
  )
}

export default FormularioRegistrar