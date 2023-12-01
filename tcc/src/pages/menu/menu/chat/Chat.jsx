import React, { useState, useRef } from 'react'
import './styleChat.css'
import SetaEsquerda from './images/setaEsquerda.svg'
import ImagemPerfil from './images/imagemPerfil.png'
import Menu from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import { Link } from 'react-router-dom'
import axios from "axios"
import UserContext from '../../../../data/hooks/context/UserContext'
import { useContext } from 'react'
import ModalChat from '../../../../ui/components/menu/conversas/ModalChat/ModalChat'
import blogFetch from '../../../../data/services/api/ApiService'
import { useEffect } from 'react'

const Chat = ({ listaMensagens, socket, chatOpen, setChatOpen, listaUsuarios, idChat }) => {

    const [message, setMessage] = useState('')

    const { id } = useContext(UserContext)

    console.log(listaUsuarios)



    const [arrayMensagens, setArrayMensagens] = useState([])

    useEffect(() => {

        console.log(listaMensagens)

        const listaReversa = [...listaMensagens]

        listaReversa.reverse()

        setArrayMensagens(listaReversa)

        console.log(listaReversa)


    }, [listaMensagens])


    const [openModal, setOpenModal] = useState(false)

    const publicarMensagem = () => {

        const data = {
            "messageBy": id,
            "messageTo": listaUsuarios[1].id,
            "message": message,
            "chatId": idChat,
            "image": ""
        }

        socket.emit('message', data)

        setMessage('')
    }

    return (
        <>
            <div className='containerChat'>

                <div className='containerChat_header'>

                    <div className='container_header'>
                        <div className='container_perfil'>

                            <img src={SetaEsquerda} alt="" onClick={() => {
                                setChatOpen(!chatOpen)
                            }} />

                            <img className='fotoPerfil' src={ImagemPerfil} alt="" />
                            <p className='nomePerfil'>Beltrana dos Santos Silva</p>
                        </div>

                        <div>
                            <img className='menu' src={Menu} alt="menu" onClick={() => setOpenModal(true)} />
                        </div>


                        <ModalChat isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>

                        </ModalChat>


                    </div>
                </div>

                <div className='containerChat_main'>

                    <div className='containerMensagensConversas'>

                        {

                            arrayMensagens == undefined ? (
                                <p>Carregando...</p>
                            ) : (

                                arrayMensagens.map((item, index) => (


                                    item.messageTo == id ? (

                                        <div className='linhaMensagem_enviada'>

                                            {

                                                item.image.length != 0 ? (

                                                    <div className='cardMensagem_enviada'>
                                                        <img src={item.image} alt="Imagem de mensagem " />
                                                    </div>

                                                ) : (

                                                    <div className='cardMensagem_enviada'>
                                                        <p className='textoCard'>{item.message}</p>
                                                        <p className='horas'></p>
                                                    </div>

                                                )

                                            }

                                        </div>

                                    ) : (

                                        <div className='linhaMensagem_recebida'>

                                            {

                                                item.image.length != 0 ? (

                                                    <div className='cardMensagem_recebida'>
                                                        <img src={item.image} alt="Imagem de mensagem " />
                                                    </div>

                                                ) : (

                                                    <div className='cardMensagem_recebida'>
                                                        <p className='textoCard'>{item.message}</p>
                                                        <p className='horas'></p>
                                                    </div>

                                                )

                                            }

                                        </div>

                                    )

                                ))

                            )

                        }




                    </div>

                    <div className='containerChat_footer'>
                        <input onChange={(e) => setMessage(e.target.value)} value={message} className='inputMensagem' placeholder='Mande uma mensagem...' type="text" />
                        <img onClick={() => {
                            publicarMensagem()
                        }} src={Enviar} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat