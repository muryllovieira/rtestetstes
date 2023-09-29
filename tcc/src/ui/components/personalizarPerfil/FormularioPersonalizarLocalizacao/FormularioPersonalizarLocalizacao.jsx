import React, { useState, useContext } from 'react'
import "./styleFormularioPersonalizarLocalizacao.css"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarLocalizacao/images/setaDireita.svg"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarLocalizacao/images/setaEsquerda.svg"
import {Link} from "react-router-dom"
import ComboBoxLocalizacao from '../ComboBoxLocalizacao/ComboBoxLocalizacao'
import BotaoAncora from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import UserContext from '../../../../data/hooks/context/UserContext'

const FormularioPersonalizarLocalizacao = ({}) => {

  return (
    <form className='formularioPersonalizarLocalizacao' action="">

      <div className='formularioPersonalizarLocalizacao__header'>
          <Link>
              <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-nome" />
          </Link>
          <Link>
            <img src={setaDireita} alt="/personalizar-perfil/personalizar-localizacao" />
          </Link>
      </div>

      <div className='formularioPersonalizarLocalizacao__main'>
          <h1>LOCALIZAÇÃO</h1>
          <p className='subtitulo'>Selecione seu estado, sua cidade e seu bairro para uma melhor experiência</p>
          <ComboBoxLocalizacao></ComboBoxLocalizacao>
      </div>

      <div className='formularioPersonalizarFoto__footer'>
       <BotaoAncora
        titulo={"Pular"}
       ></BotaoAncora>
      </div>

    </form>
  )
}

export default FormularioPersonalizarLocalizacao