import React from 'react'
import './styleChat.css'
import SetaEsquerda from './images/setaEsquerda.svg'
import ImagemPerfil from './images/imagemPerfil.png'
import Menu from './images/icone_mais.svg'

const Chat = () => {
  return (
    <>
        <div className='containerChat'>

            <div className='containerChat_header'>

                <div className='container_header'>
                    <div className='container_perfil'>
                        <img src={SetaEsquerda} alt="" />
                        <img className='fotoPerfil' src={ImagemPerfil} alt="" />
                        <p className='nomePerfil'>Beltrana dos Santos Silva</p>
                    </div>
                    <div>
                        <img src={Menu} alt="" />
                    </div>
                    
                </div>

            </div>

            <div className='containerChat_main'></div>

        </div>
    </>
  )
}

export default Chat