import React from 'react'
import './styleModalPublicar.css'
import fechar from './images/fechar.svg'
import enviar from './images/enviar.svg'

const ModalPublicar = ({isOpen, setModalOpen, children}) => {

if (isOpen) {
    return (
        <>
        <div className='modal__background'>
            <div className='container'>

                <div className='header'>
                    <img src={fechar} alt='Fechar' onClick={setModalOpen} className='botaoFechar'/>
                    <img src={enviar} alt="Enviar" className='botaoEnviar' />
                </div>

                {children}

                
            </div>
        </div>
          
        </>
      )
} else {
    null
}
}

export default ModalPublicar