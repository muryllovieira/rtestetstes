import React, { useState, useEffect, useContext } from 'react'
import "./styleFormularioPersonalizarTags.css"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaEsquerda.svg"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaDireita.svg"
import {Link} from "react-router-dom"
import BotaoTag from '../BotaoTag/BotaoTag'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'
import InputGlobal from '../../global/InputGlobal/InputGlobal'

const FormularioPersonalizarTags = () => {

  const {acessToken} = useContext(UserContext)
 

  const [value, setValue] = useState(0)
  const [todasTags, setTodasTags] = useState(false)
  const [tagsSelecionadas, setTagsSelecionadas] = useState([])
  const [listaFechada, setListaFechada] = useState(true)

  const [listaCategorias, setListaCategorias] = useState()
  const [listaTags, setListaTags] = useState()
  const [busca, setBusca] = useState('')

  useEffect(() => {
    console.log(value)
  }, [value])

  useEffect(() => {
    console.log(tagsSelecionadas)
  }, [tagsSelecionadas])

  useEffect(() => {
    pegarCategorias()
  }, [])

  useEffect(() => {
    pegarTagsGeral()
  }, [])

  const AtualizarListaTags = () => {

    return (
     <>
     
        {
          listaTags === undefined ? (
            <p>Carregando</p>
          ) : (
            listaTags.categorias_e_tags.map((lista) => (
             lista.filter((item) => {
              return busca.toLowerCase() === '' ? item : item.nome.toLowerCase().includes(busca )
             }).map((item) => (

              item.id_categoria == value ? (

                <BotaoTag option={(e) => {
                  const tagSel = handleCallBack(e)

                  if(!tagSel == true) {
                    tagsSelecionadas.push(item)
                  } 

                  if(!tagSel == false) {
                    tagsSelecionadas.map((tag, indice ) => {
                      if (tag.id == item.id) {
                        
                        console.log(item.id)
                        console.log(tag.id)
                        console.log(indice)
                        tagsSelecionadas.splice(indice, 1)
                     
                        
                        
                      }
                    })
                  }

                }} key={item.id_tag} text={item.nome}></BotaoTag>

              ) : (
                
                <BotaoTag option={(e) => {
                  const tagSel = handleCallBack(e)

                  if(!tagSel == true) {
                    tagsSelecionadas.push(item)
                  } 

                  if(!tagSel == false) {
                    tagsSelecionadas.map((tag, indice ) => {
                      if (tag.id == item.id) {
                        
                        console.log(item.id)
                        console.log(tag.id)
                        console.log(indice)
                        tagsSelecionadas.splice(indice, 1)
                     
                        
                        
                      }
                    })
                  }

                }} key={item.id_tag} text={item.nome}></BotaoTag>
              )

             ))
             
            ))
          )
        }

     </>
    )
  }

  const enviarTags = () => {
    console.log('oI')
  }

  const handleCallBack = (dados) => {
    const value = dados
    console.log(value)
    console.log(tagsSelecionadas)
    return value
  }

  const pegarCategorias = async () => {
    try {
      const response = await blogFetch.get('/categoria/select_all', {
        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
      })

      setListaCategorias(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  const pegarTagsGeral = async () => {
    try {
      const response = await blogFetch.get('/tag', {

        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
         
      })

      console.log(response)
      setListaTags(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const abrirPainelTags = (e) => {
    setListaFechada(false)
  }


  return (
    <form className='formularioPersonalizarTags' action=''>
        <div className='formularioPersonalizarTags__header'>
          <Link to={'/personalizar-perfil/personalizar-tipo'}>
            <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-tipo" />
          </Link>
          <i onClick={enviarTags}>
            <img src={setaDireita} alt="/menu/explorar" />
          </i>
        </div>

        <div className='formularioPersonalizarTags__main'>
              <h1>TAGS DE SERVIÇO</h1>
            {/* <AtualizarListaTags /> */}
              <p className='subtitle'>*As tags de serviço são utilizadas pelas costureiras para identificar que tipo de serviço elas prestam.</p>

              <InputGlobal
                onChange={setBusca}
                value={busca}
                placeholder={'Pesquise uma tag...'}
              ></InputGlobal>

              <i className='teste' onClick={(e) => {
                setListaFechada(!listaFechada)
              }}>Clique aqui</i>

              <div className='listasTags'>
                <div className='tagsList'>
                    {/* <BotaoTag text={'Costura'}></BotaoTag> */}

                    {
                      listaTags === undefined ? (
                        <p>Carregando</p>
                      ) : (
                        listaTags.categorias_e_tags.map((lista) => (
                        lista.filter((item) => {
                          return busca.toLowerCase() === '' 
                          ? item 
                          : item.nome.toLowerCase().includes(busca)

                        }).map((item) => {
                    
                          return (

                            <BotaoTag option={(e) => {
                              const tagSel = handleCallBack(e)

            
                              if(!tagSel == true) {
                                let tes = [...tagsSelecionadas]
                                tes.push(item) 
                                setTagsSelecionadas(tes)
                                
                              }

                              if(!tagSel == true) {
                                console.log(lista)
                                lista.map((tag, indice ) => {
                                  if (tag.id_tag == item.id_tag) {
                                    
                                    console.log(item.id_tag)
                                    console.log(tag.id_tag)
                                    console.log(indice)
                                    lista.splice(indice, 1)
                                    console.log(lista)
                                  }
                                })
                              }
            
                              if(!tagSel == false) {
                                tagsSelecionadas.map((tag, indice ) => {
                                  if (tag.id_tag == item.id_tag) {
                                    
                                    console.log(item.id_tag)
                                    console.log(tag.id_tag)
                                    console.log(indice)
                                    tagsSelecionadas.splice(indice, 1)
                            
                                  }
                                })
                              }
            
                            }} key={item.id_tag} text={item.nome}></BotaoTag>

                          )
                                
                              
                        })
                        
                        ))
                      )
                    }

                </div>
              </div>

              <div className={`tagsListaFechada ${listaFechada ? "tagsListaFechada" : "tagsListaAberta"}`}>
                <div className='containerTagsLista'>
                  {
                    tagsSelecionadas === undefined ||  tagsSelecionadas.length == 0 ? (
                      <p>Carregando</p>
                    ) : (
                      tagsSelecionadas.map((item) => {

                        return (

                          <BotaoTag option={(e) => {
                            // const tagSel = handleCallBack(e)
          
                            // if(!tagSel == false) {
                            //   tagsSelecionadas.push(item)
                            // }

                            // if(!tagSel == true) {
                            //   console.log(lista)
                            //   lista.map((tag, indice ) => {
                            //     if (tag.id_tag == item.id_tag) {
                                  
                            //       console.log(item.id_tag)
                            //       console.log(tag.id_tag)
                            //       console.log(indice)
                            //       lista.splice(indice, 1)
                            //       console.log(lista)
                            //     }
                            //   })
                            // }
          
                            // if(!tagSel == false) {
                            //   tagsSelecionadas.map((tag, indice ) => {
                            //     if (tag.id_tag == item.id_tag) {
                                  
                            //       console.log(item.id_tag)
                            //       console.log(tag.id_tag)
                            //       console.log(indice)
                            //       tagsSelecionadas.splice(indice, 1)
                          
                            //     }
                            //   })
                            // }
          
                          }} key={item.id_tag} text={item.nome}></BotaoTag>
                        )
                      })
                    )
                  }
                </div>
              </div>

        </div>
    </form>
  )
}

export default FormularioPersonalizarTags