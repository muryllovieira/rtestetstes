import React from 'react'
import './styleFormularioPublicacao.css'
import FotoPublicacao from '../FotoPublicacao/FotoPublicacao'
import FormDescricao from '../../../personalizarPerfil/FormDescricao/formDescricao'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../../../../../data/hooks/context/UserContext'


const FormularioPublicacao = () => {

    const [imageURL, setImageURL] = useState([])

    const {fotoPublicacao, setFotoPublicacao} = useContext(UserContext)

    const [images, setImage] = useState([])

    useEffect(() => {
        if (images.length < 1) return
    
        const newImageUrl = []
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
        setImageURL(newImageUrl)
    
      }, [images])

    function onImageChange(e) {
        setImage([...e.target.files])
      }

  return (
      <>
        <div className='formularioPublicacao'>

            <div className='container__main'>
                <FotoPublicacao
                    imageURL={imageURL}
                    func={onImageChange}
                    onChange={setFotoPublicacao}
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
                    <div className='containerTags'></div>
                </div>
            </div>

        </div>
      </>
    
  )
}

export default FormularioPublicacao