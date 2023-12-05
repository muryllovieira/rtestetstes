import React from 'react'
import './styleConversas.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import IconObject from '../../../../ui/components/global/IconesGlobais/iconesGlobais'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Foto from './images/foto.jpg'
import FotoPerfil from '../../../../ui/components/global/FotoPerfil/FotoPerfil'
import { useState, useContext } from 'react'
import io from 'socket.io-client'
import Chat from '../chat/Chat'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'
import { useEffect } from 'react'


function Conversas() {

  const location = useLocation()

  const { id, accessToken, nome, foto } = useContext(UserContext)
  const [listaContatos, setListaContatos] = useState([])
  const [chatOpen, setChatOpen] = useState(false)
  const [socket, setSocket] = useState(null)
  const [idChat, setIdChat] = useState()
  const [busca, setBusca] = useState('')

  const [ user, setUser ] = useState()

  const [listaMensagens, setListaMensagens] = useState([])

  useEffect(() => {
    console.log(listaContatos)
  }, [listaContatos])

  

  const setarSocket = (socket, setarSocket) => {
    setSocket(socket)
  }

  useEffect(() => {

   
    
    if(location.state != null || location.state != undefined) {
      
      const idPerfilSelecionado = location.state.id_usuario_perfil
      const nomePerfilSelecionado = location.state.nome_usuario_perfil
      const fotoPerfilSelecionado = location.state.foto_usuario_perfil

      const listaPerfis = [
        {
          "id": id,
          "nome": nome,
          "foto": foto
        },
        {
          "id": idPerfilSelecionado,
          "nome": nomePerfilSelecionado,
          "foto": fotoPerfilSelecionado
        }
      ]
  
      if (idPerfilSelecionado != null || nomePerfilSelecionado != null || fotoPerfilSelecionado != null ) {
        console.log(listaPerfis)
        criarChat(listaPerfis)
      }

    }
   

  }, [])

  // useEffect(() => {

  //   const socketResponse = io.connect('http://10.107.144.27:3001')

  //   setSocket(socketResponse)

  //   const list = socketResponse.emit('listContacts', id)

  //   list.on('receive_contacts', data => {
  //     if(data.id_user == id){
  //       setListaContatos(data.users)
  //     }
  //   })

  // }, [])

  const criarChat = (perfis) => {
    if (socket != undefined) {
      const chat = socket.emit('createRoom', { users: perfis })

      chat.on('newChat', data => {
        console.log(data)
      })

    }
  }

  const listarMensagens = () => {

    if (socket != undefined) {
      const chat = socket.emit('listMessages', idChat)

      chat.on('receive_message', data => {
        console.log(data)
        setListaMensagens(data.mensagens)
      })
    }

  }

  useEffect(() => {

    listarMensagens()

  }, [idChat])

  useEffect(() => {

    console.log(idChat)

    if (socket != undefined) {
      const chat = socket.emit('listMessages', idChat)

      chat.on('receive_message', data => {
        console.log(data)
        setListaMensagens(data.mensagens)
      })
    }

  }, [idChat])


  return (
    <>
      <Outlet />

      <div className="containerConversas">
        <div className='containerConversas__apresentacaoConversas'>
          <p>
            CONVERSAS
          </p>

          <div className='apresentacaoConversas__inputPesquisar'>
            <InputGlobal
              onChange={setBusca}
              type={'search'}
              placeholder={'Procurar uma conversa'}
            ></InputGlobal>
          </div>

          <FotoPerfil />

        </div>

        <section className='containerConversas__secaoDeConversas'>
          <div className='secaoConversas__listaConversas'>

            {
              listaContatos === undefined ? (

                <p>Carregando</p>

              ) : (

                listaContatos.length == 0 ? (
                  <p>Esse Usuário não possui conversas</p>
                ) : (

                  listaContatos.filter((item) => {

                    const buscaPequena = busca.toLowerCase()
                    const nomeMinusculo = item.users[0].nome.toLowerCase()


                    return buscaPequena.toLowerCase() === '' ? item : nomeMinusculo.includes(buscaPequena)

                  }).map((item, index) => {

                    return (

                      <>
                        <div key={item.id_chat} className="tagTeste" onClick={() => {
                          setChatOpen(!chatOpen)
                          setIdChat(item.id_chat)
                        }}>
                          <img className='foto' src={item.users[0].foto} alt="" />

                          <div className='container_textos'>
                            <p className='nome'>{item.users[0].nome}</p>
                            {/* <p className='ultimaMensagem'>Boa noite</p> */}
                          </div>

                          <div className='container_status'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 10 10" fill="none">
                              <circle cx="5" cy="5" r="5" fill="#C98FEC" />
                            </svg>
                            {/* <p className='horas'></p> */}
                          </div>

                        </div>

                        {
                          chatOpen == true ? (
                            <Chat
                              listaUsuarios={item.users}
                              chatOpen={chatOpen}
                              setChatOpen={setChatOpen}
                              idChat={item.id_chat}
                              socket={socket}
                              listaMensagens={listaMensagens}
                            ></Chat>
                          ) : (
                            null
                          )
                        }


                      </>

                    )

                  })
                )

              )
            }





          </div>
        </section>
      </div>

    </>
  )
}

export default Conversas