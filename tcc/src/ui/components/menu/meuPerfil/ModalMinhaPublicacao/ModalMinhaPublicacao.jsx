import React from 'react'
import './styleModalMinhaPublicacao.css'

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