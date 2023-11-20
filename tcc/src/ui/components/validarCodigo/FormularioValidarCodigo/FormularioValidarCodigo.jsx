import React from 'react'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import './styleFormularioValidarCodigo.css'
import InputCodigo from '../InputCodigo/InputCodigo'
import { useState, useEffect, useRef } from 'react'
import blogFetch from '../../../../data/services/api/ApiService'
import { useNavigate } from 'react-router-dom'

function FormularioValidarCodigo({id}) {

  const navigate = useNavigate()

  const errRef = useRef()
  const [errMsg, setErrMsg] = useState()

  const [ inputUm, setInputUm ] = useState()
  const [ inputDois, setInputDois ] = useState()
  const [ inputTres, setInputTres ] = useState()
  const [ inputQuatro, setInputQuatro ] = useState()
  const [ inputCinco, setInputCinco ] = useState()
  const [ inputSeis, setInputSeis ] = useState()

  const validarCodigo = async (e) => {
    e.preventDefault()

    const token = `${inputUm}${inputDois}${inputTres}${inputQuatro}${inputCinco}${inputSeis}`

    try {

      const response = await blogFetch.post("/usuario/validar_token", {
        id: id,
        token: token
      })

      navigate("/troca-de-senha", {state: {
        id: id
      }})



    } catch (error) {

      if (!error.response) {

        setErrMsg('Sem Resposta Do Servidor')

      } else if (error.response === 404) {

        setErrMsg('Não foi encontrado esse token para ser validado.')
        
      } else if (error.response === 400) {

        setErrMsg('Não foi encontrado esse token para ser validado.')

      } else {

        setErrMsg('Erro no servidor. Entre em contato com nosso suporte.')

      }

    }

  }
    
    return (
      <form onSubmit={(e) => validarCodigo(e)} className='formularioValidarCodigo'>
        <h1>VALIDAÇÃO DE CÓDIGO</h1>

        <p ref={errRef} className={errMsg ? "mensagemErro" : 
       "mensagemDesligada"} aria-live='assertive'>{errMsg}</p>

        <div>
          <p className='formularioValidarCodigo__texto'>Insira o código enviado ao seu e-mail.</p>

          <div className='formularioValidarCodigo__containerInputCodigo'>
            <InputCodigo
              onChange={setInputUm}
            ></InputCodigo>

            <InputCodigo
              onChange={setInputDois}
            ></InputCodigo>

            <InputCodigo
              onChange={setInputTres}
            ></InputCodigo>

            <InputCodigo
              onChange={setInputQuatro}
            ></InputCodigo>

            <InputCodigo
              onChange={setInputCinco}
            ></InputCodigo>

            <InputCodigo
              onChange={setInputSeis}
            ></InputCodigo>
            
          </div>
        </div>
        
        <BotaoFormularioGlobal
          value={'ENVIAR'}
        ></BotaoFormularioGlobal>

    </form>
    )
    
} 



export default FormularioValidarCodigo