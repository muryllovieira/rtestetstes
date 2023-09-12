import React from 'react'
import './styleFormularioTrocaDeSenha.css'
import InputGlobal from '../global/InputGlobal/InputGlobal'

function FormularioTrocaDeSenha() {
  return (
    <div className='formularioTrocaDeSenha'>
      
      <p>Nesta tela você pode alterar sua senha.</p>
      
      <label className='formularioTrocaDeSenha__labelFormulario' htmlFor="">Digite sua senha atual:</label>
      <InputGlobal
        type={'password'}
        placeholder={'********'}
      ></InputGlobal>

      <label className='formularioTrocaDeSenha__labelFormulario' htmlFor="">Digite sua nova senha:</label>
      <InputGlobal
        type={'password'}
        placeholder={'********'}
      ></InputGlobal>

      <label className='formularioTrocaDeSenha__labelFormulario' htmlFor="">Repita sua nova senha:</label>
      <InputGlobal
        type={'password'}
        placeholder={'********'}
      ></InputGlobal>

    </div>
  )
}

export default FormularioTrocaDeSenha