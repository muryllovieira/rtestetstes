import React from 'react'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import './styleFormularioValidarCodigo.css'
import InputCodigo from '../InputCodigo/InputCodigo'

function FormularioValidarCodigo() {
  return (
    <div className='formularioValidarCodigo'>
        <h1>VALIDAÇÃO DE CÓDIGO</h1>

        <div>
          <p className='formularioValidarCodigo__texto'>Insira o código enviado ao seu e-mail.</p>

          <div className='formularioValidarCodigo__containerInputCodigo'>
            <InputCodigo></InputCodigo>
            <InputCodigo></InputCodigo>
            <InputCodigo></InputCodigo>
            <InputCodigo></InputCodigo>
            <InputCodigo></InputCodigo>
            <InputCodigo></InputCodigo>
          </div>
        </div>
        

        <BotaoFormularioGlobal
        value={'ENVIAR'}
        ></BotaoFormularioGlobal>

    </div>
  )
}

export default FormularioValidarCodigo