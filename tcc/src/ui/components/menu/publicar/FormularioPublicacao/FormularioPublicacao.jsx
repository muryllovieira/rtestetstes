import React from 'react'
import './styleFormularioPublicacao.css'
import FotoPublicacao from '../FotoPublicacao/FotoPublicacao'
import FormDescricao from '../../../personalizarPerfil/FormDescricao/formDescricao'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../../data/services/api/ApiService'
import BotaoTag from '../../../personalizarPerfil/BotaoTag/BotaoTag'


const FormularioPublicacao = ({imageURL, setImageURL}) => {

    const { accessToken } = useContext(UserContext)

    const [ images, setImage ] = useState([])
    const [ tags, setTags ] = useState([])

    useEffect(() => {
        if (images.length < 1) return
    
        const newImageUrl = []
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
        setImageURL(newImageUrl)
    
      }, [images])

    function onImageChange(e) {
        setImage([...e.target.files])
      }

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

            console.log(response)

            setTags(response.data)
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
                ></InputGlobal>
            </div>

            <div className='container__footer'>
                <FormDescricao
                    type={'descricao'}
                    placeholder={'Dígite uma descrição'}
                ></FormDescricao>
                <div className='titulo__tag'>
                    <p className='tags'>TAGS</p>
                    <div className='containerTags'>

                        <div className='tagsList'>
                            {
                                tags.length == 0 ? (
                                    <p>Carregando</p>
                                ) : (
                                    tags.tags.map((item, indice) => {
                                        
                                        if (item.selecao == true) {
                                            return (
                                                <BotaoTag
                                                    text={item.nome}
                                                    key={item.id_tag}

                                                ></BotaoTag> 

                                            )
                                        } else {
                                            return (
                                               <BotaoTag
                                                key={item.id_tag}
                                                text={item.nome}
                                                option={() => {



                                                    tags.tags.map((tag, indice) => {
                                                        if (item.id_tag == tag.id_tag) {
                                                            
                                                            tags.tags.splice(indice, 1)

                                                            tags.tags.push({
                                                                id_tag: item.id_tag,
                                                                nome: item.nome,
                                                                id_categoria: item.id_categoria,
                                                                imagem: item.imagem,
                                                                nome_categoria: item.nome_categoria,
                                                                selecao: true
                                                            })

                                                        
                                                        }
                                                    })

                                                    console.log(tags.tags)
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