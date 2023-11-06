import React, { useState } from 'react'
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
import blogFetch from '../../../../../data/services/api/ApiService'

import Fechar from './images/fechar.svg'


register()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { useEffect } from 'react'

const ModalPublicacaoExplorar = ({ isOpen, setModalOpen, accessToken, idPublicacao, dadosPublicacao, idUsuario, tituloPublicacao, descricaoPublicacao, anexosPublicacao }) => {

  const navigate = useNavigate()

  const swiper = useSwiper()

  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)


  const [opcoes, setOpcoes] = useState(false)
  const [value, setValue] = useState(0)
  const [editar, setEditar] = useState(false)

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

  useEffect(() => {
    pegarTags()
  }, [])


  useEffect(() => {
    setListLenght()
  }, [dadosPublicacao])

  if (isOpen) {
    return (
        <>
          <div className='modal__background'>
            <div className='formularioMinhaPublicacao'>

              <div className='setor_01'>

                <div className='setor01_header'>
                  <img src={Fechar} alt="Voltar" className='setaVoltar' onClick={() => {
                    setModalOpen(!isOpen)
                  }
                  } />
                </div>

                <div className='setor01_main'>
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



                <div className='setor01_footer'>
                  <BotaoAncoraGlobal
                    titulo={'Dar Ponto'}
                  ></BotaoAncoraGlobal>

                  <BotaoAncoraGlobal
                    titulo={'Responder'}
                  ></BotaoAncoraGlobal>
                </div>
              </div>

              <div className='setor_02'>

                <div className="setor02_header">
                  <div className="card">

                    {
                      dadosPublicacao === undefined ? (
                        <p className='carregandoPublicacao'>Carregando</p>
                      ) : (
                        <div className='perfil_container'>
                          <img src={dadosPublicacao.publicacao.usuario.foto} className='foto_perfil' />
                          <p className='nome_perfil'>{dadosPublicacao.publicacao.usuario.nome}</p>
                        </div>
                      )
                    }

                    <div className='menu'>
                      <img onClick={() => {
                        setOpcoes(!opcoes)
                      }} src={IconeMais} className='iconeMenuPublicacao' />
                      {
                        opcoes == false ? (
                          null
                        ) : (
                          <div className='modalOpcoesPublicacao'>
                            <div onClick={
                              () => {

                                apagarPublicacao(idPublicacao)
                              }
                            } className='opcaoExcluir'>
                              <p className='textoExcluirPublicacao'>
                                Apagar publicação
                              </p>
                            </div>
                            <div onClick={() => {
                              setEditar(!editar)
                            }} className='opcaoEditar'>
                              <p className='textoEditarPublicacao'>
                                Editar publicação
                              </p>
                            </div>
                          </div>
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

                  <div className='lista_comentarios'>

                    <div className='card_comentario'>
                      <img src={ImagemPerfil} alt="" className='foto_perfil' />
                      <div className='container_textos'>
                        <p className='nome'>Mayara</p>
                        <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                        <p className='responder'>Responder</p>
                      </div>
                    </div>
                    <div className='card_comentario'>
                      <img src={ImagemPerfil} alt="" className='foto_perfil' />
                      <div className='container_textos'>
                        <p className='nome'>Mayara</p>
                        <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                        <p className='responder'>Responder</p>
                      </div>
                    </div>
                    <div className='card_comentario'>
                      <img src={ImagemPerfil} alt="" className='foto_perfil' />
                      <div className='container_textos'>
                        <p className='nome'>Mayara</p>
                        <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                        <p className='responder'>Responder</p>
                      </div>
                    </div>
                    <div className='card_comentario'>
                      <img src={ImagemPerfil} alt="" className='foto_perfil' />
                      <div className='container_textos'>
                        <p className='nome'>Mayara</p>
                        <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                        <p className='responder'>Responder</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='setor02_footer'>
                  <InputGlobal
                    type={'email'}
                    emailWeb={true}
                    placeholder={'Escreva um comentário...'}
                  ></InputGlobal>
                  <img src={Enviar} alt="" />
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