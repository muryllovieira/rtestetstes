import React from 'react'
import "./styleFormularioPersonalizarFoto.css"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarFoto/images/setaEsquerda.svg"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarFoto/images/setaDireita.svg"
import { Link } from 'react-router-dom'
import InputGlobal from '../../global/InputGlobal/InputGlobal'

//components
import FotoPerfil from '../FotoPerfil/FotoPerfil.jsx'
import BotaoAncora from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'

const FormularioPersonalizarFoto = () => {
  return (
    <form className='formularioPersonalizarFoto' action="">

      <div className='formularioPersonalizarFoto__header'>
          <Link>
              <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-nome" />
          </Link>
          <Link>
            <img src={setaDireita} alt="/personalizar-perfil/personalizar-localizacao" />
          </Link>
      </div>

      <div className='formularioPersonalizarFoto__main'>
        <h1>FOTO DE PERFIL E DESCRIÇÃO</h1>
        <FotoPerfil></FotoPerfil>
        <p>*A foto de perfil e a descrição não são obrigatórias.</p>

        <InputGlobal
          type={'email'}
          descriptionWeb={true}
          placeholder={"Dígite uma descrição"}
        ></InputGlobal>

      </div>

      <div className='formularioPersonalizarFoto__footer'>
       <BotaoAncora
        titulo={"Pular"}
       ></BotaoAncora>
      </div>

    </form>
  )
}

export default FormularioPersonalizarFoto