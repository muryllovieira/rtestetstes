import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './styleFormularioLogin.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoLoginGoogle from '../BotaoLoginGoogle/BotaoLoginGoogle'
import blogFetch from '../../../../data/services/api/ApiService'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import UserContext, { UserProvider } from '../../../../data/hooks/context/userContext'


function FormularioLogin () {

  const { setAccessToken } = useContext(UserContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState()

  const [senha, setSenha] = useState()

  const [errMsg, setErrMsg] = useState()
  
  const errRef = useRef()


  useEffect(() => {
    setErrMsg('')
  }, [email, senha])


  const getUsuario = async (e) => {

    e.preventDefault()

    try {
      const response = await blogFetch.post("/usuario/login", {
        email: email,
        senha: senha
       })
   
      
      const accessToken = response.data.token

      setAccessToken({ email, senha, accessToken})

      navigate("/menu/explorar")
      
    } catch (error) {

      if(!error.response) {
        setErrMsg('Sem Resposta Do Servidor')

      } else if (error.response.status === 404) {
        setErrMsg('Senha ou Email Incorreto')

      } else if (error.response.status === 401) {
        setErrMsg('Não Autorizado')

      } else {
        setErrMsg('O Login Falhou. Entre em contato com nosso suporte')
      }

      errRef.current.focus()

    }

  }

  return (
    <form className='formularioLogin' onSubmit={(e) => getUsuario(e)}>
      <h1>LOGIN</h1>

      <p ref={errRef} className={errMsg ? "mensagemErro" : 
      "mensagemDesligada"} aria-live='assertive'>{errMsg}</p>

      <div className='formularioLogin__containerInputs'>

        <InputGlobal
         type={'email'}
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