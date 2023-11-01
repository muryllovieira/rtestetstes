import React from 'react'
import './styleFormularioTrocaDeEmail.css'
import InputGlobal from '../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../global/BotaoFormularioGlobal/BotaoFormularioGlobal'

const FormularioTrocaDeEmail = ({id}) => {
  return (
    <form className='formularioTrocaDeEmail'>

        <p>Nesta tela você pode alterar seu e-mail.</p>

        <label className='formularioTrocaDeEmail__labelFormulario' htmlFor="">Digite seu novo email:</label>
        <InputGlobal
            placeholder={'Novo email'}
        />

        <label className='formularioTrocaDeEmail__labelFormulario' htmlFor="">Repita seu novo email:</label>
        <InputGlobal
            placeholder={'Repita o email'}
        />

        <BotaoFormularioGlobal
            value={'Enviar'}
        />

    </form>
  )
}

export default FormularioTrocaDeEmail