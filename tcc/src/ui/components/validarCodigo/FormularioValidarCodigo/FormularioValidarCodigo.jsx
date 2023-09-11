import React from 'react'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import './styleFormularioValidarCodigo.css'

function FormularioValidarCodigo() {
  return (
    <div className='formularioValidarCodigo'>
        <h1>VALIDAÇÃO DE CÓDIGO</h1>

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

export default FormularioValidarCodigo