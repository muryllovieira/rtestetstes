import React, { useState, useContext } from 'react'
import UserContext from '../../../../../data/hooks/context/UserContext'
import './styleModalPublicacaoExplorar.css'
import './product-image-slider.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Controller, Virtual, Pagination, A11y } from 'swiper/modules'
import { register } from 'swiper/element/bundle'
import { useNavigate } from 'react-router-dom'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import BotaoAncoraGlobal from '../../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import ImagemPerfil from './images/imagemPerfil.png'
import IconeMais from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import FotoPublicacao from '../../publicar/FotoPublicacao/FotoPublicacao'
import BotaoTag from '../../../personalizarPerfil/BotaoTag/BotaoTag'
import FormDescricao from '../../../personalizarPerfil/FormDescricao/formDescricao'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import { uploadImage } from '../../../../../data/services/firebase/firebase'
import ComentarioPublicacaoExplorar from '../ComentarioPublicacaoExplorar/ComentarioPublicacaoExplorar'
import blogFetch from '../../../../../data/services/api/ApiService'

import Fechar from './images/fechar.svg'


register()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { useEffect } from 'react'

const ModalPublicacaoExplorar = ({ isOpen, setModalOpen, accessToken, idPublicacao, dadosPublicacao, idUsuario, tituloPublicacao, descricaoPublicacao, anexosPublicacao }) => {

  const navigate = useNavigate()

  const { id } = useContext(UserContext)

  const swiper = useSwiper()

  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  const [comentar, setComentar] = useState('')

  const [opcoes, setOpcoes] = useState(false)
  const [opcoesComentario, setOpcoesComentario] = useState(false)
  const [value, setValue] = useState(0)
  const [editar, setEditar] = useState(false)

  const [comentario, setComentario] = useState()

  const [tags, setTags] = useState([])

  const setListLenght = () => {

    if (dadosPublicacao === undefined) {
      return false
    } else {
      if (dadosPublicacao.publicacao.anexos.length >= 4) {
        setValue(4)

      } else {

        setValue(dadosPublicacao.publicacao.anexos.length)

      }
    }


  }

  useEffect(() => {
    if (isOpen == true) {
      pegarComentarios()
    }
  }, [isOpen])

  useEffect(() => {
    console.log(comentar)
  }, [comentar])

  const pegarTags = async () => {
    try {
      const response = await blogFetch.get('/tag', {
        headers: {
          "x-access-token": accessToken
        }
      })

      setTags(response.data.tags)
    } catch (error) {
      console.log(error)
    }
  }

  const pegarComentarios = async () => {
    try {
      const response = await blogFetch.get(`/comentario/select_by_id_publicacao/${idPublicacao}`, {
        headers: {
          'x-access-token': accessToken
        }
      })

      console.log(response)
      setComentario(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const adicionarComentario = async () => {
    try {
      const response = await blogFetch.post('/comentario/inserir', {
        id_publicacao: idPublicacao,
        id_usuario: idUsuario,
        mensagem: comentar
      }, {
        headers: {
          'x-access-token': accessToken
        }
      })

      console.log(response)

      setComentar('')
      pegarComentarios()

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    pegarTags()
  }, [])



  useEffect(() => {
    setListLenght()
  }, [dadosPublicacao])

  if (isOpen) {
    return (
      <>
        <div>

          <div className='modalBackground'></div>

          <div className='formularioPublicacaoExplorar'>

            <div className='formularioPublicacaoExplorar__containerImagensPublicacaoExplorar'>

              <div className='containerImagensPublicacaoExplorar__itemVoltar'>

                <img src={Fechar} alt="Voltar" className='setaVoltarPublicacaoExplorar' onClick={() => {
                  setModalOpen(!isOpen)
                }}
                />
              </div>

              <div className='containerImagensPublicacaoExplorar__listaImagensPublicacaoExplorar'>
                <Swiper
                  slidesPerView={1}
                  navigation
                  virtual
                  modules={[Controller, Virtual, Pagination, A11y]}
                  onSwiper={firstSwiper}
                  controller={{ control: secondSwiper }}
                  pagination={{ clickable: true }}
                >
                  {
                    dadosPublicacao === undefined ? (
                      <p>Carregando</p>
                    ) : (
                      dadosPublicacao.publicacao.anexos.map((item, index) => (
                        <SwiperSlide
                          key={item}
                          className='slide_post'
                          virtualIndex={index}
                        >
                          <img src={item.anexo} alt="" className='slide_item' />
                        </SwiperSlide>
                      ))
                    )


                  }
                </Swiper>
              </div>

              <div className='containerImagensPublicacaoExplorar__botoesPublicacaoExplorar'>
                <BotaoAncoraGlobal
                  titulo={'Dar Ponto'}
                ></BotaoAncoraGlobal>

                <BotaoAncoraGlobal
                  titulo={'Responder'}
                ></BotaoAncoraGlobal>
              </div>
            </div>

            <div className='formularioPublicacaoExplorar__containerDadosPublicacaoExplorar'>

              <div className="containerDadosPublicacaoExplorar__cardUsuarioPublicacaoExplorar">
                <div className="cardUsuarioPublicacaoExplorar">

                  {
                    dadosPublicacao === undefined ? (

                      <p className='carregandoPublicacao'>Carregando</p>

                    ) : (

                      <div className='cardUsuarioPublicacaoExplorar__containerDadosUsuarioPublicacao'>

                        <img className='fotoUsuarioPublicacaoExplorar' src={dadosPublicacao.publicacao.usuario.foto} />

                        <p className='nomeUsuarioPublicacaoExplorar'>{dadosPublicacao.publicacao.usuario.nome}</p>

                      </div>

                    )
                  }

                  <div className={`cardUsuarioPublicacaoExplorar__menuOpcoesPublicacaoExplorar ${ opcoes == true ? 'cardUsuarioPublicacaoExplorar__menuOpcoesPublicacaoExplorarAtivada' : ''}`}>

                    <img onClick={() => {

                      setOpcoes(!opcoes)

                    }}
                      src={IconeMais} className='menuOpcoesPublicacaoExplorar__iconeMenuPublicacao'
                    />


                    {
                      opcoes == false ? (
                        null
                      ) : (

                        id == dadosPublicacao.publicacao.usuario.id_usuario ? (

                          <div className='modalOpcoesPublicacaoExplorar'>

                            <div onClick={() => {

                              apagarPublicacao(idPublicacao)

                            }}

                              className='opcaoExcluirPublicacaoExplorar'
                            >

                              <p className='textoExcluirPublicacaoExplorar'>
                                Apagar publicação
                              </p>

                            </div>

                            <div onClick={() => {

                              setEditar(!editar)

                            }}

                              className='opcaoEditarPublicacaoExplorar'
                            >

                              <p className='textoEditarPublicacaoExplorar'>
                                Editar publicação
                              </p>

                            </div>

                          </div>

                        ) : (

                          <div className='modalOpcoesPublicacaoExplorar'>

                            <div onClick={() => {

                            }}

                              className='opcaoDenunciarPublicacaoExplorar'
                            >

                              <p className='textoDenunciarPublicacaoExplorar'>
                                Denunciar publicação
                              </p>

                            </div>

                          </div>

                        )

                      )
                    }
                  </div>

                </div>
              </div>

              <div className='setor02_main'>

                {
                  dadosPublicacao === undefined ? (
                    <p className='carregandoPublicacao'>Carregando...</p>
                  ) : (
                    <div className='titulo_descricao'>
                      <h1 className='titulo'>{dadosPublicacao.publicacao.titulo}</h1>
                      <p className='descricao'>{dadosPublicacao.publicacao.descricao}</p>
                    </div>
                  )
                }

                <div className='listaComentarioExplorar'>

                  {
                    comentario === undefined ? (
                      <p>Carregando...</p>
                    ) : (

                      comentario.comentarios.map((item, indice) => (

                        <ComentarioPublicacaoExplorar
                          fotoUsuario={item.usuario.foto}
                          idUsuarioAtual={id}
                          idUsuarioComentario={item.id_usuario}
                          mensagemComentario={item.mensagem}
                          nomeUsuario={item.usuario.nome_de_usuario}
                          key={item.id}
                        ></ComentarioPublicacaoExplorar>

                      ))
                    )

                  }


                </div>
              </div>

              <div className='setor02_footer'>

                <InputGlobal
                  type={'email'}
                  emailWeb={true}
                  placeholder={'Escreva um comentário...'}
                  value={comentar}
                  onChange={setComentar}
                ></InputGlobal>

                <img onClick={() => {
                  adicionarComentario()
                }} src={Enviar} alt="" />

              </div>

            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      null
    )
  }
}

export default ModalPublicacaoExplorar