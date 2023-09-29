import React, {useState, useEffect} from 'react'
import './styleCardUsuarioMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'

function CardUsuarioMeuPerfil({ nomePerfil, tagPerfil, localicaoPerfil, fotoPerfil}) {

  const [image, setImage] = useState('https://worldapheresis.org/wp-content/uploads/2022/04/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpeg')
  

  return (
    <>
    
      <div className='cardUsuarioMeuPerfil'>

          <div className='cardUsuarioMeuPerfil__imagensPerfil'>
            <img src={FundoImagemPerfil} className='imagensPerfil__fotoFundo' />
              <img className='imagensPerfil__fotoUsuario' src={image ? fotoPerfil : image} alt="" />
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

CardUsuarioMeuPerfil.defaultProps = {
  fotoPerfil: null,
  nomePerfil: 'No Content',
  tagPerfil: 'No Content',
  localicaoPerfil: 'No Content'
}

export default CardUsuarioMeuPerfil