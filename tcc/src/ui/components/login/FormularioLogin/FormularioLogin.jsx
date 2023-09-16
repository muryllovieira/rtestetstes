import React from 'react'
import { Link } from 'react-router-dom'
import './styleFormularioLogin.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoLoginGoogle from '../BotaoLoginGoogle/BotaoLoginGoogle'
// import blogFetch from '../../../../data/services/api/ApiService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function FormularioLogin () {

  const navigate = useNavigate()

  const [email, setEmail] = useState()

  const [senha, setSenha] = useState()

  const getUsuario = async (e) => {

    const post = { email, senha}
    e.preventDefault()

    try {
      const response = await axios.patch({
        baseURL: 'https://super-hare-shoulder-pads.cyclic.cloud/usuario/login',
        headers: {'Content-Type': 'application/json'},
        data: post
      })
      const data = response
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
   

  }

  return (
    <form className='formularioLogin' onSubmit={(e) => getUsuario(e)}>
      <h1>LOGIN</h1>

      <div className='formularioLogin__containerInputs'>

        <InputGlobal
         type={'text'}
         placeholder={'Email'}
         onChange={setEmail}
        ></InputGlobal>

        <InputGlobal
          type={'password'}
          placeholder={'Senha'}
          onChange={setSenha}
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
      
    </form>
  )
}

export default FormularioLogin