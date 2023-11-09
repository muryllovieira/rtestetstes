import React from 'react'
import './styleConversas.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import IconObject from '../../../../ui/components/global/IconesGlobais/iconesGlobais'
import { Outlet, Link } from 'react-router-dom'
import Foto from './images/foto.jpg'


function Conversas() {
  return (
    <>
      <Outlet/>
    
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

            <Link to={"/menu/conversas/chat"}>
            <div className="tagTeste">
                <img className='foto' src={Foto} alt="" />
                <div className='container_textos'>
                  <p className='nome'>Beltrana dos Santos Silva</p>
                  <p className='ultimaMensagem'>Boa noite</p>
                </div>
                <div className='container_status'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="5" fill="#C98FEC"/>
                    </svg>
                  <p className='horas'>10:30</p>
                </div>
              </div>
            </Link>

              
              
              
              {/* <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div>
              <div className="tagTeste"></div> */}

            </div>
         </section>
      </div>
    
    </>
  )
}

export default Conversas