import React, { useState, useEffect } from 'react'
import "./styleFormularioPersonalizarTags.css"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaEsquerda.svg"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaDireita.svg"
import {Link} from "react-router-dom"
import BotaoTag from '../BotaoTag/BotaoTag'

const FormularioPersonalizarTags = () => {

  return (
    <form className='formularioPersonalizarTags' action=''>
        <div className='formularioPersonalizarTags__header'>
          <Link>
            <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-nome" />
          </Link>
          <Link>
            <img src={setaDireita} alt="/personalizar-perfil/personalizar-localizacao" />
          </Link>
        </div>

        <div className='formularioPersonalizarTags__main'>
            <h1>TAGS DE SERVIÇO</h1>
            <p className='subtitle'>*As tags de serviço são utilizadas pelas costureiras para identificar que tipo de serviço elas prestam.</p>
            <div className='tagsList'>
                <BotaoTag text={'Costura'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>
                <BotaoTag text={'Bordados'}></BotaoTag>

            </div>
        </div>
    </form>
  )
}

export default FormularioPersonalizarTags