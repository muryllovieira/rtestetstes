import React from 'react'
import './styleModalPublicar.css'
import fechar from './images/fechar.svg'
import enviar from './images/enviar.svg'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FormularioPublicacao from '../FormularioPublicacao/FormularioPublicacao'
import blogFetch from '../../../../../data/services/api/ApiService'
import { uploadImage } from '../../../../../data/services/firebase/firebase'
import UserContext from '../../../../../data/hooks/context/UserContext'

const ModalPublicar = () => {

    const { id, accessToken } = useContext(UserContext)

    const navigate = useNavigate()

    const [imageURL, setImageURL] = useState([])

    const [ tags, setTags ] = useState([])
    const [ tagsSelecionadas, setTagsSelecionadas ] = useState([])

    const [ titulo, setTitulo ] = useState('')
    const [ descricao, setDescricao ] = useState('')

    const [ images, setImage ] = useState([])
    const [ imagensSelecionadas, setImagensSelecionadas ] = useState([])

    const imagesList = []

    useEffect(() => {
  
        console.log(imagensSelecionadas)
    },[imagensSelecionadas])

    const salvarFoto = async () => {

        if(images !== undefined && images !== null && images[0] !== undefined && images[0] !== null && images.length != 0) {
            
            try {

                

                images.map( async (item, indice) => {

                    const responseImgList = await uploadImage(item, item.name)

                    imagesList.push({
                        conteudo: responseImgList
                    })

                    return imagesList
                    
                })

                return imagesList

            } catch (error) {
              console.log(error)
            }
              
            return imagesList
        } else {
            return false
        }

    }


    const enviarPublicacao = async () => {

        const foto = await salvarFoto()

        // const letImagensSelecionadas = [...imagensSelecionadas]

        // letImagensSelecionadas.push(foto)

        // setImagensSelecionadas(letImagensSelecionadas)

        console.log(imagensSelecionadas)
        console.log(foto);

        if (titulo != '' && descricao != '' && tagsSelecionadas.length != 0) {

            if (foto != null && foto !== undefined) {
                try {

                    console.log({
                        id_usuario: id,
                        titulo: titulo,
                        descricao: descricao,
                        tags: tagsSelecionadas,
                        anexos: imagesList
                    })
                    
                    const response = await blogFetch.post('/publicacao/inserir', {
                        id_usuario: id,
                        titulo: titulo,
                        descricao: descricao,
                        tags: tagsSelecionadas,
                        anexos: [imagesList]
                    }, 
                    {
                        headers: {
                            'x-access-token': accessToken
                        }
                    }
                )
                console.log(response)
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log('É obrigatório o envio de fotos')
            }

        } else {
            console.log('Dados obrigatórios não foram preenchidos!')
        }
    }

    useEffect(() => {
        if (images.length < 1) return
    
        const newImageUrl = []
        images.forEach(image => newImageUrl.push(
            URL.createObjectURL(image)    
        ))
        setImageURL(newImageUrl)
    
      }, [images])

    function onImageChange(e) {
        setImage([...e.target.files])
    }


    return (
        <>
            <div onClick={() => {

                navigate(-1)
                
                imageURL.map((item) => {
                      
                    imageURL.splice(0, imageURL.length)
                   
                })

            }} className='modal__background'></div>
            
            <div className='container'>

                <div className='header'>

                    <img onClick={() => {
                        navigate(-1)
                        imageURL.map((item) => {
                      
                            imageURL.splice(0, imageURL.length)
                            
                        })
                    }} src={fechar} alt='Fechar' className='botaoFechar'/>

                    <img onClick={() => {
                        enviarPublicacao()
                    }} src={enviar} alt="Enviar" className='botaoEnviar' />
                
                </div>

                    
                <FormularioPublicacao
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                    setTagsList={setTags}
                    tagsList={tags}
                    setTitulo={setTitulo}
                    setDescricao={setDescricao}
                    setTagsSelecionadas={setTagsSelecionadas}
                    tagsSelecionadas={tagsSelecionadas}
                    onImageChange={onImageChange}
                ></FormularioPublicacao>
                
           
            </div>
          
        </>
      )

}

export default ModalPublicar