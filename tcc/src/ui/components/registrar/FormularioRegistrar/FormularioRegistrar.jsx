import React, { useRef } from 'react'
import './styleFormularioRegistrar.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoRegistrarGoogle from '../BotaoRegistrarGoogle/BotaoRegistrarGoogle'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import blogFetch from '../../../../data/services/api/ApiService'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function FormularioRegistrar() {

  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)


  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    console.log(email)
  },[email])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  },[user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    setValidName(result)
    const match = pwd === matchPwd
    setValidMatch(match)

    console.log(result, match)
  },[pwd, matchPwd])
  
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])



  const createUsuario = async (e) => {
    e.preventDefault()

    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry")
      return
    }

    try {
      const response = await blogFetch.post()
    } catch (erro) {

    }
  
    
  }
  

  return (
    <form onSubmit={createUsuario} className='formularioRegistrar'>
      <h1>REGISTRAR</h1>


      <div className='formularioRegistrar__containerInputs'>

        <InputGlobal
          type={'email'}
          placeholder={'Email'}
          onChange={setEmail}
        ></InputGlobal>

        <InputGlobal
          pwd={validPwd ? "false" : "true"}
          register={true}
          id={'inputRegistrarSenha'}
          type={'password'}
          placeholder={'Senha'}
          onChange={setPwd}
        ></InputGlobal>

        <InputGlobal
          pwd={validPwd ? "false" : "true"}
          register={true}
          id={'inputRegistrarSenhaDois'}
          type={'password'}
          placeholder={'Repita a senha'}
          onChange={setMatchPwd}
        ></InputGlobal>

        <InputGlobal
          type={'text'}
          placeholder={'Digite um nome de usuário'}
          onChange={setUser}
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
      
     

      

    </form>
  )
}

export default FormularioRegistrar