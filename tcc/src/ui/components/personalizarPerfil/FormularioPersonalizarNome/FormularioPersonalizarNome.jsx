import React from 'react'
import './styleFormularioPersonalizarNome.css'
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarNome/img/setaDireita.svg"
import {Link} from "react-router-dom"
import InputGlobal from '../../global/InputGlobal/InputGlobal'

function FormularioPersonalizarNome() {
  return (
    <form className='formularioPersonalizarNome'>

      <div className="formularioPersonalizarNome__header">
        <Link to = {'/personalizar-perfil/personalizar-foto'}>
          <img src={setaDireita} alt="" />
        </Link>
      </div>

      <div className="formularioPersonalizarNome__main">
        <div className='cabecalho'>
        <h1>NOME DO SEU PERFIL</h1>
        <p>*O nome do seu perfil pode ser o seu nome inteiro. O nome do perfil é obrigatório.</p>
        </div>

        <div className='textField'>
          <p>Nome:</p>
        <InputGlobal
          type = {'email'}
          emailWeb = {true}
          placeholder = {'digite seu nome'}
        ></InputGlobal>
        </div>
      </div>

    </form>
    
  )
}

export default FormularioPersonalizarNome