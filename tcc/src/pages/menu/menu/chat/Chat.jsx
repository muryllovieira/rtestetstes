import React, { useState } from 'react'
import './styleChat.css'
import SetaEsquerda from './images/setaEsquerda.svg'
import ImagemPerfil from './images/imagemPerfil.png'
import Menu from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import axios from "axios"
import UserContext from '../../../../data/hooks/context/UserContext'
import { useContext } from 'react'

import ModalChat from '../../../../ui/components/menu/conversas/ModalChat/ModalChat'
import blogFetch from '../../../../data/services/api/ApiService'
import { useEffect } from 'react'

const Chat = ({ chatOpen, setChatOpen, listaUsuarios, idChat }) => {

    const [socket, setSocket] = useState(null)

    const [listaMensagens, setListaMensagens] = useState([])
    const [message, setMessage] = useState('')

    const { id } = useContext(UserContext)

    const socketResponse = io.connect('http://10.107.144.8:3001')

    // const setChat = async () => {

    // }

    useEffect(() => {

        const chat = socketResponse.emit('listMessages', idChat)

        chat.on('receive_message', data => {
            console.log(data)
        })

    })

    const publicarMensagem = () => {
        const data = {
            "messageBy": 7,
            "messageTo": 2,
            "message": message,
            "chatId": idChat,
            "image": ""
        }

        const teste = socketResponse.emit('message', data)
    }


    useEffect(() => {
        ioChat()
    }, [])

    console.log(idChat)

    const ioChat = async () => {

        try {

            const response = await blogFetch.get(`/message/${idChat}`)

            setListaMensagens(response.data.mensagens)

        } catch (error) {
            console.log(error)
        }

    }

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

                    <div className='containerMensagens'>

                        {

                            listaMensagens == undefined ? (
                                <p>Carregando...</p>
                            ) : (

                                listaMensagens.map((item, index) => {

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