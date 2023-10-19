import React from 'react'
import './styleModalPublicar.css'
import fechar from './images/fechar.svg'
import enviar from './images/enviar.svg'
import { useNavigate } from 'react-router-dom'

const ModalPublicar = ({isOpen, children}) => {

    const navigate = useNavigate()

    return (
        <>
            <div onClick={() => {
                navigate(-1)
            }} className='modal__background'></div>
            
            <div className='container'>

                <div className='header'>
                    <img onClick={() => {
                        navigate(-1)
                    }} src={fechar} alt='Fechar' className='botaoFechar'/>
                    <img src={enviar} alt="Enviar" className='botaoEnviar' />
                
                </div>

                    
                {children}
                
           
            </div>
          
        </>
      )

}

export default ModalPublicar