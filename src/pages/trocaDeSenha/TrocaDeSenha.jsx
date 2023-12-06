import React from 'react'
import './styleTrocaDeSenha.css'
import FormularioTrocaDeSenha from '../../ui/components/trocaDeSenha/FormularioTrocaDeSenha'
import BotaoFormularioGlobal from '../../ui/components/global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import UserContext from '../../data/hooks/context/UserContext'
import IconObject from '../../ui/components/global/IconesGlobais/IconesGlobais'
import { useNavigate } from 'react-router-dom'
import ModalCarregarGlobal from '../../ui/components/global/ModalCarregarGlobal/ModalCarregarGlobal'
import { useContext, useState } from 'react'

function TrocaDeSenha() {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [modalTags, setModalTags] = useState(false)

  const [visivel, setVisivel] = useState(false)
  const [erro, setErro] = useState(0)
  const [caminho, setCaminho] = useState("")
  const [mensagem, setMensagem] = useState("")

  const [abrirFechar, setAbrirFechar] = useState(false)

  const { id } = useContext(UserContext)

  const modalCarregar = (visivel, erro, caminho, mensagem, abrirFechar) => {

    setVisivel(visivel)

    setErro(erro)

    setCaminho(caminho)

    setMensagem(mensagem)
    setAbrirFechar(abrirFechar)

  }

  return (
    <>



      <div className='containerTrocaDeSenha'>



        <div className='containerTrocaDeSenha__containerFormulario'>

          <div className='containerFormulario__headerFormulario'>

            <div onClick={() => {
              navigate('/validar-codigo')
            }} className='headerFormulario__iconeVoltarFormulario'>
              <i>{IconObject.voltarOuCancelarColorido}</i>
            </div>
            <h1 className='headerFormulario__tituloFormulario'>ALTERAR SENHA</h1>

          </div>

          {

            id === undefined ? (
              <p>Sem ID</p>
            ) : (
              <FormularioTrocaDeSenha
                modalCarregar={modalCarregar}
                id={id}
              ></FormularioTrocaDeSenha>
            )

          }

          <ModalCarregarGlobal
            caminho={caminho}
            erro={erro}
            visivel={visivel}
            mensagem={mensagem}
            setVisivel={setVisivel}
            open={open}
            setOpen={setOpen}
            abrirFechar={open}
            setAbrirFechar={setOpen}
          ></ModalCarregarGlobal>


        </div>

      </div>

    </>
  )
}

export default TrocaDeSenha