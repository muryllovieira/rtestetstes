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

const Chat = ({ socket, chatOpen, setChatOpen, listaUsuarios, idChat }) => {

    const [listaMensagens, setListaMensagens] = useState([])
    const [listaMensagensEndPoint, setListaMensagensEndPoint] = useState([])
    const [message, setMessage] = useState('')

    const compararListas = () => {



    }

    const { id } = useContext(UserContext)

    const chatContainerRef = useRef(null);

    const scrollDown = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    // const setChat = async () => {

    // }

    useEffect(() => {

        console.log(socket)

        const chat = socket.emit('listMessages', idChat)

        console.log(chat)

        chat.on('receive_message', data => {
            console.log(data)
            setListaMensagens(data.mensagens)
        })


    }, [])

  

    const publicarMensagem = () => {

        const data = {
            "messageBy": 7,
            "messageTo": 32,
            "message": message,
            "chatId": idChat,
            "image": ""
        }

        const letListaMensagem = [...listaMensagens, data]

        setListaMensagens(letListaMensagem)

        const teste = socket.emit('message', data)

        scrollDown()
    }


    // useEffect(() => {
    //     ioChat()
    // }, [])

    // const ioChat = async () => {

    //     try {

    //         const response = await blogFetch.get(`/message/${idChat}`)


    //         setListaMensagensEndPoint(response.data.mensagens)

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    const [openModal, setOpenModal] = useState(false)

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

                    <div ref={chatContainerRef} className='containerMensagensConversas'>

                        {

                            listaMensagensEndPoint == undefined ? (
                                <p>Carregando...</p>
                            ) : (

                                listaMensagensEndPoint.map((item, index) => {

                                    if (item.messageTo == id) {

                                        return (
                                            <div className='linhaMensagem_enviada'>
                                                <div className='cardMensagem_enviada'>
                                                    <p className='textoCard'>{item.message}</p>
                                                    <p className='horas'></p>
                                                </div>
                                            </div>
                                        )

                                    } else {

                                        return (
                                            <div className='linhaMensagem_recebida'>
                                                <div className='cardMensagem_recebida'>
                                                    <p>{item.message}</p>
                                                    <p className='horas'></p>
                                                </div>
                                            </div>
                                        )

                                    }

                                })

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