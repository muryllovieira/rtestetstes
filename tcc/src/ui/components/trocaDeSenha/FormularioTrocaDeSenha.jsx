import React from 'react'
import './styleFormularioTrocaDeSenha.css'
import InputGlobal from '../global/InputGlobal/InputGlobal'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import blogFetch from '../../../data/services/api/ApiService'
import BotaoFormularioGlobal from '../global/BotaoFormularioGlobal/BotaoFormularioGlobal'


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function FormularioTrocaDeSenha({id}) {

  const errRef = useRef()

  const [errMsg, setErrMsg] = useState()

  const navigate = useNavigate()
  
  const [ pwdNova, setPwdNova ] = useState('')
  const [ pwdNovaValid, setPwdNovaValid ] = useState(false)
  
  const [ pwdMatch, setPwdMatch ] = useState('')
  const [ pwdMatchValid, setPwdMatchValid ] = useState(false)

  {/*Validação Pelo Console*/
    //   //senha atual
    // useEffect(() => {
    //   console.log(pwdAtual)
    // },[pwdAtual])


    // useEffect(() => {

    //   //valida se a senha é cumpre os requisitos
    //   const resultAtual = PWD_REGEX.test(pwdAtual)
    //   const resultNova = PWD_REGEX.test(pwdNova)
    //   const resultMatch = PWD_REGEX.test(pwdMatch)
      
    //   //joga o resultado na senha valida state
    //   setPwdAtualValid(resultAtual)
    //   setPwdNovaValid(resultNova)
      

    //   //valida se as duas senhas tem valor igual
    //   const match = pwdNova === pwdMatch

    //   setPwdMatchValid(match)
      
    //   //joga no console os valores true ou false
    //   console.log({senhaAtual: resultAtual, senhaNova: resultNova, senhaMatch: resultMatch, senhasCombinam: match})


    // },[pwdAtual, pwdNova, pwdMatch])

    
    
    // useEffect(() => {

    //   //seta qualquer mensagem de erro que tiver
    //   setErrMsg('')

    // }, [ pwdAtual, pwdMatch])
  }/*Validação Pelo Console*/

  const enviarSenha = async (event) => {
    event.preventDefault()
    

    const v2 = PWD_REGEX.test(pwdNova)
    const v3 = PWD_REGEX.test(pwdMatch)

    if (!v2 || !v3) {
      // console.log(v1)
      // console.log(v2)
      // console.log(v3)
      setErrMsg("Os campos precisam cumprir os requisitos")
      return
      
    } else if (pwdNova == '' && pwdMatch == '') {

      setErrMsg("Os campos não podem estar vazios")

    } else if (pwdNova != pwdMatch) {

      setErrMsg("As senhas não são iguais, tente novamente")

    } else if (!v2) {

      setErrMsg("A senha precisa cumprir os requisitos")

    } else if (!v3) {

      setErrMsg("A repetição da senha precisa cumprir os requisitos")

    } else {

      try {
        const response = await blogFetch.put("/usuario/atualizar_senha", {
          id: id,
          senha: pwdNova
        })

        navigate("/login")


      } catch (error) {

        if (!error.response) {

          setErrMsg('Sem Resposta Do Servidor')

        } else if (error.response.status === 400) {

          console.log(error)

          setErrMsg('Usuario já cadastrado')
  
        } else if (error.response.status === 404) {

          setErrMsg('Usuário não encontrado')
  
        } else if (error.response.status === 401) {

          setErrMsg('Não Autorizado')
  
        } else {
          setErrMsg('O Envio Falhou. Entre em contato com nosso suporte')
        }

      }
    }

  }


  return (
    <form onSubmit={(e) => enviarSenha(e)} className='formularioTrocaDeSenha'>
      
      <p ref={errRef} className={errMsg ? "mensagemErro" : 
      "mensagemDesligada"} aria-live='assertive'>{errMsg}</p>

      <p>Nesta tela você pode alterar sua senha.</p>
      

      <label className='formularioTrocaDeSenha__labelFormulario' htmlFor="">Digite sua nova senha:</label>
      <InputGlobal
        register={true}
        type={'password'}
        placeholder={'********'}
        pwd={setPwdNova}
      ></InputGlobal>

      <label className='formularioTrocaDeSenha__labelFormulario' htmlFor="">Repita sua nova senha:</label>
      <InputGlobal
        register={true}
        type={'password'}
        placeholder={'********'}
        pwd={setPwdMatch}
      ></InputGlobal>

      <BotaoFormularioGlobal
        value={'ENVIAR'}
      ></BotaoFormularioGlobal>

    </form>
  )
}

export default FormularioTrocaDeSenha