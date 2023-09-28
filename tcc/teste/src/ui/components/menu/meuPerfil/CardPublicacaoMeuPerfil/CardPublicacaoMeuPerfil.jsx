import React from 'react'
import './styleCardPublicacaoMeuPerfil.css'
import FundoImagemPerfil from '../../../../../pages/menu/menu/perfil/images/fundoImagemPerfil.svg'
import UsuarioImagemPerfil from '../../../../../pages/menu/menu/perfil/images/usuarioImagemPerfil.svg'

function CardPublicacaoMeuPerfil() {
  return (
    <>
        <div className="cardPublicacaoMeuPerfil">
            <div className="cardPublicacaoMeuPerfil__containerImagemPublicacao">
                <img className='containerImagemPublicacao__imagemFundo' src={FundoImagemPerfil} alt="" />
                <img className='containerImagemPublicacao__imagemPublicacao' src={UsuarioImagemPerfil} alt="" />
            </div>

            <p className='cardPublicacaoMeuPerfil__nomeUsuario'>Beltrana dos Santos Silva</p>
            <p className='cardPublicacaoMeuPerfil__tituloPublicacao'>Titulo Teste</p>
        </div>
    </>
  )
}

export default CardPublicacaoMeuPerfil