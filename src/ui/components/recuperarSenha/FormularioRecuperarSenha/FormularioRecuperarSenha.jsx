import React from 'react'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import './styleFormularioRecuperarSenha.css'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import blogFetch from '../../../../data/services/api/ApiService'

function FormularioRecuperarSenha() {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState()

  const [errMsg, setErrMsg] = useState()

  const errRef = useRef()

  {/*Validação pelo Console*/

    // useEffect(() => {
    //   console.log(email)
    // },[email])

  }/*Validação pelo Console*/
  

  const sendEmail = async (event) => {
    event.preventDefault()

    try {

      const response = await blogFetch.post("/usuario/esqueceu_a_senha", {
        email: email
      })

    

      const userId = response.data.id

      console.log(response.data)
      console.log(userId)

      navigate("/validar-codigo", {state: {
        email: email,
        id: userId
      }})

    } catch (error) {

      if(!error.response) {

        setErrMsg('Sem Resposta Do Servidor')

      } else if (error.response.status === 404) {

        setErrMsg('E-Mail não encontrado no nosso sistema.')

      } else if (error.response.status === 429) {
        
        setErrMsg('Muitas Requisições. Aguarde e tente novamente.')

      } else {

        setErrMsg('O Envio Falhou. Entre em contato com nosso suporte')

      }

      errRef.current.focus()

    }

  
  }


  return (
    <form onSubmit={(e) => sendEmail(e)} className='formularioRecuperarSenha'>
        <h1>RECUPERAR SENHA</h1>

        <p ref={errRef} className={errMsg ? "mensagemErro" : 
        "mensagemDesligada"} aria-live='assertive'>{errMsg}</p>

        <p>Insira seu e-mail para o processo de verificação, vamos mandar um código para o seu e-mail.</p>

        <InputGlobal
          onChange={setEmail}
          type={'email'}
          placeholder={'Email'}
        ></InputGlobal>

        <BotaoFormularioGlobal
          value={'ENVIAR'}
        ></BotaoFormularioGlobal>

    </form>
  )
}

export default FormularioRecuperarSenha