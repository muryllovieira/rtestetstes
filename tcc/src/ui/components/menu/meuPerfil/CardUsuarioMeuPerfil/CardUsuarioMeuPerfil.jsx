import React from 'react'
import './styleCardUsuarioMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import UsuarioImagemPerfil from '../../../../../pages/menu/menu/perfil/images/usuarioImagemPerfil.svg'

function CardUsuarioMeuPerfil() {
  return (
    <>
    
      <div className='cardUsuarioMeuPerfil'>

          <div className='cardUsuarioMeuPerfil__imagensPerfil'>
              <img className='imagensPerfil__fotoFundo' src={FundoImagemPerfil} alt="" />
              <img className='imagensPerfil__fotoUsuario' src={UsuarioImagemPerfil} alt="" />
          </div>

          <div className='cardUsuarioMeuPerfil__informacoesMeuPerfil'>

            <h2 className='informacoesMeuPerfil__nomePerfil'>Beltrano dos Santos Silva</h2>

            <span className='informacoesMeuPerfil__tagPerfil'>@BELTRANO_GOD</span>

            <span className='informacoesMeuPerfil__localizacaoPerfil'>
              <i>{IconObject.localizacaoMeuPerfil}</i>
              Jandira,SP
            </span>
            
          </div>

      </div>

    </>
  )
}

export default CardUsuarioMeuPerfil