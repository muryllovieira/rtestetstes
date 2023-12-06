import React, { useState } from 'react'
import ModalPublicar from '../../../../ui/components/menu/publicar/modalPublicar/ModalPublicar'
import FormularioPublicacao from '../../../../ui/components/menu/publicar/FormularioPublicacao/FormularioPublicacao'
import './stylePublicar.css'
import ModalCarregarGlobal from '../../../../ui/components/global/ModalCarregarGlobal/ModalCarregarGlobal'

function Publicar() {


  const [ visivel, setVisivel ] = useState(false)
  const [ erro, setErro ] = useState(0)
  const [ caminho, setCaminho ] = useState("")
  const [ mensagem , setMensagem ] = useState("")

  const modalCarregar = (visivel, erro, caminho, mensagem) => {

    setVisivel(visivel)

    setErro(erro)

    setCaminho(caminho)

    setMensagem(mensagem)
    
  }

 
  return (
    
      <>
        <div>
          <ModalPublicar
            modalCarregar={modalCarregar}
          ></ModalPublicar>
        </div>

        <ModalCarregarGlobal
        visivel={visivel}
        setVisivel={setVisivel}
        erro={erro}
        caminho={caminho}
        mensagem={mensagem}
      ></ModalCarregarGlobal>
       
      </>
    
    
  )
}

export default Publicar