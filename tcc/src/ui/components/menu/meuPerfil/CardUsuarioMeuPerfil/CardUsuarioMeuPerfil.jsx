import React from 'react'
import './styleCardUsuarioMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import UsuarioImagemPerfil from '../../../../../pages/menu/menu/perfil/images/usuarioImagemPerfil.svg'

function CardUsuarioMeuPerfil({img, nomePerfil, tagPerfil, localicaoPerfil}) {
  return (
    <>
    
      <div className='cardUsuarioMeuPerfil'>

          <div className='cardUsuarioMeuPerfil__imagensPerfil'>
              <img className='imagensPerfil__fotoFundo' src={FundoImagemPerfil} alt="" />
              <img className='imagensPerfil__fotoUsuario' src={UsuarioImagemPerfil} alt="" />
          </div>

          <div className='cardUsuarioMeuPerfil__informacoesMeuPerfil'>

            <h2 className='informacoesMeuPerfil__nomePerfil'>{nomePerfil}</h2>

            <span className='informacoesMeuPerfil__tagPerfil'>@{tagPerfil}</span>

            <span className='informacoesMeuPerfil__localizacaoPerfil'>
              <i>{IconObject.localizacaoMeuPerfil}</i>
              {localicaoPerfil}
            </span>
            
          </div>

      </div>

    </>
  )
}

export default CardUsuarioMeuPerfil