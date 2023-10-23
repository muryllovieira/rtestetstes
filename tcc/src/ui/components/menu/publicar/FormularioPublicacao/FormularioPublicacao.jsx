import React from 'react'
import './styleFormularioPublicacao.css'
import FotoPublicacao from '../FotoPublicacao/FotoPublicacao'
import FormDescricao from '../../../personalizarPerfil/FormDescricao/formDescricao'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../../data/services/api/ApiService'
import BotaoTag from '../../../personalizarPerfil/BotaoTag/BotaoTag'
import { uploadImage } from '../../../../../data/services/firebase/firebase'


const FormularioPublicacao = ({imageURL, setImageURL, setTitulo, setDescricao, setTagsList, tagsList, setTagsSelecionadas, tagsSelecionadas, onImageChange}) => {

    const { accessToken } = useContext(UserContext)

    useEffect(() => {
        pegarTags()
    },[])



    const pegarTags = async () => {
        try {
            const response = await blogFetch.get('/tag', {
                headers: {
                    "x-access-token": accessToken
                }
            })

            setTagsList(response.data.tags)
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <>
        <div className='formularioPublicacao'>

            <div className='container__main'>
                <FotoPublicacao
                    imageURL={imageURL}
                    func={onImageChange}
                    setImageURL={setImageURL}
                ></FotoPublicacao>
                <InputGlobal
                    type={'email'}
                    placeholder={'Título'}
                    emailWeb={true}
                    onChange={setTitulo}
                ></InputGlobal>
            </div>

            <div className='container__footer'>

                <FormDescricao
                    type={'descricao'}
                    placeholder={'Dígite uma descrição'}
                    onChange={setDescricao}
                ></FormDescricao>

                <div className='titulo__tag'>

                    <p className='tags'>TAGS</p>

                    <div className='containerTags'>

                        <div className='tagsList'>
                            {
                                tagsList.length == 0 ? (
                                    <p>Carregando</p>
                                ) : (
                                    tagsList.map((item, indice) => {
                                        
                                        if (item.selecao == true) {
                                           return (
                                            <BotaoTag
                                                text={item.nome}
                                                key={item.id_tag}
                                                selecao={item.selecao}
                                                option={() => {
                                                    tagsList.map((tag, indice) => {
                                                        if (item.id_tag == tag.id_tag) {
                                                            tagsList.splice(indice, 1)

                                                            const letTags = [...tagsList]

                                                            letTags.push({
                                                                id_tag: item.id_tag,
                                                                nome: item.nome,
                                                                id_categoria: item.id_categoria,
                                                                imagem: item.imagem,
                                                                nome_categoria: item.nome_categoria
                                                            })

                                                            const letTagsSelecionadas = [...tagsSelecionadas]

                                                            setTagsList(letTags)

                                                            letTagsSelecionadas.splice(indice, 1)

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

                                                    

                                                    tagsList.map((tag, indice) => {
                                                        if (item.id_tag == tag.id_tag) {
                                                            
                                                            tagsList.splice(indice, 1)

                                                            const letTags = [...tagsList]

                                                            letTags.unshift({
                                                                id_tag: item.id_tag,
                                                                nome: item.nome,
                                                                id_categoria: item.id_categoria,
                                                                imagem: item.imagem,
                                                                nome_categoria: item.nome_categoria,
                                                                selecao: true
                                                            })

                                                            setTagsList(letTags)

                                                            const letTagsSelecionadas = [...tagsSelecionadas]

                                                            letTagsSelecionadas.unshift({
                                                                id_tag: item.id_tag
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
      </>
    
  )
}

export default FormularioPublicacao