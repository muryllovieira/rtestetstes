import React from 'react'
import './styleModalChat.css'
import Fechar from './images/fechar.png'

const ModalChat = ({isOpen, setModalOpen}) => {

    if (isOpen) {
        return (
            <>
                <div className='modal__background'>
                    <div className='containerModal'>

                        <div className='modalHeader'>
                            <p>OPÇÕES</p>
                            <img className='fechar' src={Fechar} alt="Fechar" onClick={() => setModalOpen(false)}/>
                        </div>

                        <div className='modalMain'>
                            <button className='botao'>
                                <p>Apagar conversa</p>
                            </button>
                            <button className='botao'>
                                <p>Denunciar</p>
                            </button>
                        </div>

                    </div>
                </div>
            </>
        )
    } else {
        null
    }

}

export default ModalChat