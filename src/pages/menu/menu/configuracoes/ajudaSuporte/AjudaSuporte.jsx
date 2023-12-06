import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './styleAjudaSuporte.css'
import setaEsquerda from '../images/setaEsquerda.svg'
import {Link} from 'react-router-dom'
import InputGlobal from '../../../../../ui/components/global/InputGlobal/InputGlobal'
import FormDescricao from '../../../../../ui/components/personalizarPerfil/FormDescricao/formDescricao'
import BotaoFormularioGlobal from '../../../../../ui/components/global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import FotoPerfil from '../../../../../ui/components/global/FotoPerfil/FotoPerfil'

const AjudaSuporte = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nome, setNome] = useState('')

  function enviarEmail(e) {
      e.preventDefault()

      const templateParams = {
        from_name: nome,
        message: message,
        email: email
      }
      
      emailjs.send("service_1z4f319", "template_54om9mm", templateParams, "9Il1RMyqz-QPHJab1")
      .then((response) => {
        console.log("Email enviado com sucesso", response.status)
        setMessage('')
        setEmail('')
        setNome('')
      }, (err) => {
        console.log(err)
      })
  }

  return (
    <>
    <div className='containerAjudaSuporte'>

      <div className='containerAjudaSuporte_header'>
        <Link to={'/menu/configuracoes'}>
          <img src={setaEsquerda} alt="" />
        </Link>
          <p className='sobre'>AJUDA E SUPORTE</p>
          <FotoPerfil/>
      </div>

      <form onSubmit={enviarEmail} className='containerAjudaSuporte_main'>

          <p>Se você encontrou algum problema ou bug durante a utilização do App, ou tem alguma sugestão de melhoria, deixe-nos saber para que possamos resolver e/ou melhorar o App. Envie uma mensagem breve do problema ou da sugestão e insira seu e-mail para contato. Agradecemos a ajuda!</p>

          <div className='email'>
            <p>Dígite seu nome:</p>
            <InputGlobal
              onChange={setNome}
              value={nome}
            />
          </div>

          <div className='email'>
            <p>Dígite seu e-mail:</p>
            <InputGlobal
              onChange={setEmail}
              value={email}
            />
          </div>

          <div className='descricao'>
            <p>Insira sua sugestão ou reporte um problema:</p>
            <FormDescricao
              type={'description'}
              onChange={setMessage}
              value={message}
            />
          </div>

          <BotaoFormularioGlobal
            value={'Enviar'}
          />

      </form>

    </div>
    </>
  )
}

export default AjudaSuporte