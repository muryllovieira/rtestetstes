import React from 'react'
import './styleModalPublicar.css'
import fechar from './images/fechar.svg'
import enviar from './images/enviar.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormularioPublicacao from '../FormularioPublicacao/FormularioPublicacao'

const ModalPublicar = () => {

    const navigate = useNavigate()

    const [imageURL, setImageURL] = useState([])

    useEffect(() => {
        console.log(imageURL)
    },[imageURL])

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
                    <img src={enviar} alt="Enviar" className='botaoEnviar' />
                
                </div>

                    
                <FormularioPublicacao
                    imageURL={imageURL}
                    setImageURL={setImageURL}
                ></FormularioPublicacao>
                
           
            </div>
          
        </>
      )

}

export default ModalPublicar