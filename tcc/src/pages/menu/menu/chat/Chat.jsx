import React from 'react'
import './styleChat.css'
import SetaEsquerda from './images/setaEsquerda.svg'
import ImagemPerfil from './images/imagemPerfil.png'
import Menu from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import { Link } from 'react-router-dom'

const Chat = () => {
  return (
    <>
        <div className='containerChat'>

            <div className='containerChat_header'>

                <div className='container_header'>
                    <div className='container_perfil'>
                        <Link to={"/menu/conversas"}>
                            <img src={SetaEsquerda} alt="" />
                        </Link>
                        <img className='fotoPerfil' src={ImagemPerfil} alt="" />
                        <p className='nomePerfil'>Beltrana dos Santos Silva</p>
                    </div>
                    <div>
                        <img src={Menu} alt="" />
                    </div>
                </div>
            </div>

            <div className='containerChat_main'>

                    <div className='containerMensagens'>

                        <div className='linhaMensagem_enviada'>
                            <div className='cardMensagem_enviada'>
                                <p className='textoCard'>Boa Noite!</p>
                                <p className='horas'>15:55</p>
                            </div>
                        </div>
                        
                        <div className='linhaMensagem_recebida'>
                            <div className='cardMensagem_recebida'>
                                <p>Olá</p>
                                <p className='horas'>15:55</p>
                            </div>
                        </div>
                    </div>

                <div className='containerChat_footer'>
                    <input className='inputMensagem' placeholder='Mande uma mensagem...' type="text" />
                    <img src={Enviar} alt="" />
                </div>
            </div>

        </div>
    </>
  )
}

export default Chat