import React from 'react'
import './styleModalMinhaPublicacao.css'
import setaEsquerda from '../FormularioMinhaPublicacao/images/setaEsquerda.svg'

const ModalMinhaPublicacao = ({isOpen, setModalOpen, children}) => {

if (isOpen) {
    return(
        <>
            <div className='modal__background'>
                
                {children}
            </div>
        </>
    )
} else {
    null
}
}

export default ModalMinhaPublicacao