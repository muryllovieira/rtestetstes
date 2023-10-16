import React from 'react'
import './styleModalPublicar.css'
import FormularioPublicar from '../formularioPublicar/FormularioPublicar'

const ModalPublicar = ({isOpen, setModalOpen, children}) => {

if (isOpen) {
    return (
        <>
            <div className='modal_background'>
               
    
                {<FormularioPublicar></FormularioPublicar>}
    
               
            </div>
        </>
      )
} else {
    null
}
}

export default ModalPublicar