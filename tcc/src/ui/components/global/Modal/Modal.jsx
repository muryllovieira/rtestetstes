import React from 'react'
import './styleModal.css'
import setaEsquerda from '../../../../pages/menu/menu/servicosPerfil/images/setaEsquerda.svg'
import BotaoAncoraGlobal from '../BotaoAncoraGlobal/BotaoAncoraGlobal'


const ModalLocalizacao = ({isOpen, setModalOpen, children}) => {

if(isOpen) {
    return (
        <>
        <div className='modal__background'>
            <div className='containerModal'>

                <div className='modal__header'>
                    <img src={setaEsquerda} onClick={setModalOpen} className='botaoFechar'/>
                    <h1>FILTROS</h1>
                </div>

                {children}

                <div className='modal__footer'>
                    <BotaoAncoraGlobal
                        titulo={"FILTRAR"}
                    ></BotaoAncoraGlobal>
                </div>
            </div>
        </div>
          
        </>
      )
} else {
    null
}

}

export default ModalLocalizacao