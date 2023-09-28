import React from 'react'
import './styleConversas.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import IconObject from '../../../../ui/components/global/IconesGlobais/iconesGlobais'

function Conversas() {
  return (
    <>
    
      <div className="containerConversas">
          <div className='containerConversas__apresentacaoConversas'>
            <p>
              CONVERSAS
            </p>

            <div className='apresentacaoConversas__inputPesquisar'>
              <InputGlobal
                type={'search'}
                placeholder={'Procurar uma conversa'}
              ></InputGlobal>
              <i>{IconObject.home}</i>
            </div>

            <div className='containerConversas__cardFoto'></div>

          </div>

          <section className='containerConversas__secaoDeConversas'>
            <div className='secaoConversas__listaConversas'>

              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              
           
   
       
        

            </div>
         </section>
      </div>
    
    </>
  )
}

export default Conversas