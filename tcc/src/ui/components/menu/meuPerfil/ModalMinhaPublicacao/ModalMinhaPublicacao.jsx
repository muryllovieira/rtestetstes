import React, { useState } from 'react'
import './styleModalMinhaPublicacao.css'
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
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect } from 'react'

const ModalMinhaPublicacao = ({ isOpen, setModalOpen, accessToken, idPublicacao, dadosPublicacao, idUsuario, tituloPublicacao, descricaoPublicacao, anexosPublicacao }) => {

  console.log(dadosPublicacao)

  const navigate = useNavigate()

  const swiper = useSwiper()

  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)


  const [opcoes, setOpcoes] = useState(false)
  const [value, setValue] = useState(0)
  const [editar, setEditar] = useState(false)

  const [imageURL, setImageURL] = useState(anexosPublicacao)
  const [images, setImage] = useState([])

  const [tags, setTags] = useState([])
  const [tagsSelecionadas, setTagsSelecionadas] = useState([])

  const [titulo, setTitulo] = useState(tituloPublicacao)
  const [descricao, setDescricao] = useState(descricaoPublicacao)

  const [clique, setClique] = useState(false)

  function onImageChange(e) {
    setImage([...e.target.files])
  }

  useEffect(() => {
    if (images.length < 1) return

    const newImageUrl = [...imageURL]

    images.forEach(image => newImageUrl.push(
      URL.createObjectURL(image)
    ))

    setImageURL(newImageUrl)

  }, [images])

  const salvarFoto = async () => {

    if (images !== undefined && images !== null && images[0] !== undefined && images[0] !== null && images.length != 0) {

      try {

        const arrayPromiseImagesResponse = images.map(async (item, indice) => {

          const responseImgList = await uploadImage(item, item.name)

          return await responseImgList
        })

        const arrayImagesResponse = await Promise.all(arrayPromiseImagesResponse)

        return arrayImagesResponse

      } catch (error) {
        console.log(error)
      }

      return arrayImagesResponse
    } else {
      return false
    }

  }

  const setListLenght = () => {

    if (dadosPublicacao === undefined) {
      return false
    } else {
      if (dadosPublicacao.publicacao.anexos.length >= 4) {
        setValue(4)
        console.log('a')
      } else {

        setValue(dadosPublicacao.publicacao.anexos.length)

        console.log('b')
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
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    pegarTags()
  }, [])

  // useEffect(() => {
  //   console.log(dadosPublicacao)
  // },[dadosPublicacao])

  const listarTagsDaPublicacao = () => {

    const listaTagsPublicacao = []

    if (dadosPublicacao === undefined) {
      return false
    } else {
      dadosPublicacao.publicacao.tags.map((item, index) => {
        tags.map((tag, indice) => {

          if (item.id_tag == tag.id_tag) {


            listaTagsPublicacao.push({
              id_tag: item.id_tag,
              nome: item.nome,
              id_categoria: item.id_categoria,
              imagem: item.imagem,
              nome_categoria: item.nome_categoria,
              selecao: true
            })


          }
        })
      })


      return listaTagsPublicacao
    }


  }

  const adicionarTagsComSelecao = () => {

    const listaTagsPublicacao = listarTagsDaPublicacao()

    if (listaTagsPublicacao == false) {
      console.log('as')
    } else {

      const letTags = [...tags]

      const letTagsSelecionadas = [...tagsSelecionadas]


      letTags.map((letTag, letIndex) => {
        listaTagsPublicacao.map((item, indice) => {
          if (letTag.id_tag == item.id_tag) {

            letTags.splice(letIndex, 1)

            letTags.unshift(item)

            letTagsSelecionadas.push({
              id_tag: item.id_tag
            })

          }
        })
      })


      setTagsSelecionadas(letTagsSelecionadas)

      setTags(letTags)

    }

  }

  const pegarTagsSelecionadasListaTagsAlterada = () => {

    const listaTags = []

    tags.map((tag, index) => {
      tagsSelecionadas.map((item, indice) => {

        if (item.novo == true && tag.id_tag == item.id_tag) {
          listaTags.push(item)
        }

      })
    })

    return listaTags
  }

  const removerTagsListaTagsListaSelecionadas = () => {

    const listaTagsSelecionadasAlteradas = pegarTagsSelecionadasListaTagsAlterada()

    const listaTagsRemovidas = []

    if (listaTagsSelecionadasAlteradas.length == 0) {

      return false

    } else {

      listaTagsSelecionadasAlteradas.map((tagSel, indexSel) => {
        tags.map((tag, index) => {
          tagsSelecionadas.map((item, indice) => {
            if (tagSel.id_tag == item.id_tag) {

              tagsSelecionadas.splice(indice, 1)

              tags.splice(index, 1)

              listaTagsRemovidas.push({
                id_categoria: tag.id_categoria,
                id_tag: tag.id_tag,
                imagem: tag.imagem,
                nome: tag.nome,
                nome_categoria: tag.nome_categoria
              })

              // letTags.unshift({
              //   id_categoria: tag.id_categoria,
              //   id_tag: tag.id_tag,
              //   imagem: tag.imagem,
              //   nome: tag.nome,
              //   nome_categoria: tag.nome_categoria
              // })
            }
          })
        })
      })

      return listaTagsRemovidas
    }

  }

  const adicionarTagsSemAlteracaoListaTags = () => {

    const listaTagsRemovidas = removerTagsListaTagsListaSelecionadas()

    if (listaTagsRemovidas == false) {
      return false
    } else {
      listaTagsRemovidas.map((tagRemovida, indice) => {
        tags.push(tagRemovida)
      })

      return true
    }
  }

  const alterarTagsSelecionadas = () => {

    const tagsSelecionadasAlteradas = []

    tagsSelecionadas.map((tag, indice) => {
      tagsSelecionadasAlteradas.push({
        id_tag: tag.id_tag
      })
    })

    return tagsSelecionadasAlteradas
  }

  useEffect(() => {

    const listaTagsInalterada = adicionarTagsSemAlteracaoListaTags()

    if (listaTagsInalterada == false) {
      console.log('deu erro')
    } else {
      console.log('deu certo')
    }

  }, [clique])

  useEffect(() => {

    adicionarTagsComSelecao()

  }, [dadosPublicacao])

  const listarAnexosPublicacao = () => {

    const listaAnexos = []

    if (anexosPublicacao.length == 0) {
      return false
    } else {
      anexosPublicacao.map((item) => {
        listaAnexos.push({
          conteudo: item
        })
      })
    }

    return listaAnexos

  }

  const apagarPublicacao = async (id) => {
    try {
      const response = await blogFetch.delete(`/publicacao/${id}`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      navigate('/menu/explorar')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const editarPublicacao = async () => {

    const tagsAlteradas = alterarTagsSelecionadas()

    const listaAnexos = listarAnexosPublicacao()

    const arrayImagesUrl = [...listaAnexos]

    if (listaAnexos == false) {
      console.log('erro')
    } else {
      const foto = await salvarFoto()

      if (foto != false) {

        foto.map((item) => {
          arrayImagesUrl.push({
            conteudo: item
          })

        })

      }
    }


    if (titulo != '' && descricao != '' && tagsAlteradas.length != 0 && arrayImagesUrl.length != 0) {


      try {
        // const response = await blogFetch.put('/publicacao/editar_publicacao', {
        //   id_publicacao: idPublicacao,
        //   id_usuario: idUsuario,
        //   titulo: titulo,
        //   descricao: descricao,
        //   tags: tagsAlteradas,
        //   anexos: arrayImagesUrl
        // },
        //   {
        //     headers: {
        //       'x-access-token': accessToken
        //     }
        //   }
        // )

        console.log(JSON.stringify({
          id_publicacao: idPublicacao,
          id_usuario: idUsuario,
          titulo: titulo,
          descricao: descricao,
          tags: tagsAlteradas,
          anexos: arrayImagesUrl
        }))

        // console.log(response)
        // console.log(response.data)
      } catch (error) {
        console.log(error)
      }

    } else {
      console.log('Dados obrigatórios não foram preenchidos!')
    }
  }

  useEffect(() => {
    setListLenght()
  }, [dadosPublicacao])

  if (isOpen) {
    return (
      editar === false ? (
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
      ) : (
        <>
          <div className='modal__background'>
            <div className='containerEditarPublicacao'>

              <div className='containerEditarPublicacao__containerImagens'>

                <div className='containerImagens'>
                  <img src={Fechar} alt="Voltar" className='setaVoltar' onClick={() => {
                    setEditar(!editar)
                    setDescricao(descricaoPublicacao)
                    setTitulo(tituloPublicacao)
                    setClique(!clique)
                    setImageURL(anexosPublicacao)
                  }
                  } />
                </div>

                <FotoPublicacao
                  imageURL={imageURL}
                  func={onImageChange}
                  setImageURL={setImageURL}
                ></FotoPublicacao>


              </div>

              <div className='containerEditarPublicacao__containerFormulario'>

                <div className='containerFormulario__iconeSalvarPublicacaoMeuPerfil'>
                  <i onClick={() => {
                    editarPublicacao()
                  }} className='iconeSalvarPublicacaoMeuPerfil'>{IconObject.salvarMeuPerfil}</i>
                </div>

                <div className='containerFormulario'>


                  {

                    dadosPublicacao == undefined ? (
                      <p>Carregando</p>
                    ) : (
                      <InputGlobal
                        type={'email'}
                        placeholder={'Título'}
                        emailWeb={true}
                        onChange={setTitulo}
                        value={titulo}
                      ></InputGlobal>
                    )

                  }


                  {

                    dadosPublicacao == undefined ? (
                      <p>Carregando</p>
                    ) : (
                      <FormDescricao
                        type={'descricao'}
                        placeholder={'Dígite uma descrição'}
                        onChange={setDescricao}
                        value={descricao}
                      ></FormDescricao>
                    )

                  }



                  <div className='containerEditarTags'>

                    <p className='tags'>TAGS</p>

                    <div className='containerTagsEditarPublicacao'>

                      <div className='tagsListEditarPublicacao'>
                        {
                          tags.length == 0 ? (
                            <p>Carregando</p>
                          ) : (
                            tags.map((item, indice) => {

                              if (item.selecao == true) {
                                return (
                                  <BotaoTag
                                    text={item.nome}
                                    key={item.id_tag}
                                    selecao={item.selecao}
                                    option={() => {
                                      tags.map((tag, indice) => {
                                        if (item.id_tag == tag.id_tag) {
                                          tags.splice(indice, 1)

                                          const letTags = [...tags]

                                          letTags.push({
                                            id_tag: item.id_tag,
                                            nome: item.nome,
                                            id_categoria: item.id_categoria,
                                            imagem: item.imagem,
                                            nome_categoria: item.nome_categoria
                                          })

                                          const letTagsSelecionadas = [...tagsSelecionadas]

                                          letTagsSelecionadas.map((letItem, letIndice) => {
                                            if (item.id_tag == letItem.id_tag) {
                                              letTagsSelecionadas.splice(letIndice, 1)
                                            }
                                          })

                                          setTags(letTags)

                                          setTagsSelecionadas(letTagsSelecionadas)
                                        }
                                      })
                                    }}
                                  ></BotaoTag>
                                )
                              } else {
                                return (
                                  <BotaoTag
                                    key={item.id_tag}
                                    text={item.nome}
                                    option={() => {



                                      tags.map((tag, indice) => {
                                        if (item.id_tag == tag.id_tag) {

                                          tags.splice(indice, 1)

                                          const letTags = [...tags]

                                          letTags.unshift({
                                            id_tag: item.id_tag,
                                            nome: item.nome,
                                            id_categoria: item.id_categoria,
                                            imagem: item.imagem,
                                            nome_categoria: item.nome_categoria,
                                            selecao: true
                                          })

                                          setTags(letTags)

                                          const letTagsSelecionadas = [...tagsSelecionadas]

                                          letTagsSelecionadas.unshift({
                                            id_tag: item.id_tag,
                                            novo: true
                                          })

                                          setTagsSelecionadas(letTagsSelecionadas)

                                        }
                                      })


                                    }}
                                  ></BotaoTag>
                                )
                              }
                            })
                          )
                        }
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )
    )
  } else {
    return (
      null
    )
  }
}

export default ModalMinhaPublicacao