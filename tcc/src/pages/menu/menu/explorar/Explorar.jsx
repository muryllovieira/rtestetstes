import React from 'react'
import "./styleExplorar.css"
import { Outlet } from 'react-router-dom'
import FotoPerfil from './images/imagemPerfil.png'

function Explorar() {

  return (
    <>
      <div className='containerExplorar'>
        
        <Outlet/>

        <div className='containerExplorar__tituloEFoto'>
          <p>
            EXPLORAR
          </p>

          <div className='tituloEFoto__cardFoto'></div>

        </div>

        <section className='containerExplorar__secaoPublicacao'>

          <div className='secaoPublicacao__filtroPublicacao'>
            <span className='maisPopulares'>MAIS POPULARES <i></i> </span>
            <span className='recentes'>RECENTES <i></i> </span>
            
          </div>

          <div className='secaoPublicacao__listaPublicacoes'>

            <div className="cardPublicacao">
              <img src={FotoPerfil} className='fotoPublicacao' alt="" />
              <div className='container_textos'>
                <p className='nomePerfilPublicacao'>Mayara</p>
                <p className='tituloPublicacao'>Título</p>
              </div> 
            </div>
            
          </div>

        </section>

      </div>
    </>
  )
}

export default Explorar