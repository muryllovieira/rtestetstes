import React from 'react'
import './styleAjudaSuporte.css'
import setaEsquerda from '../images/setaEsquerda.svg'
import {Link} from 'react-router-dom'
import InputGlobal from '../../../../../ui/components/global/InputGlobal/InputGlobal'
import FormDescricao from '../../../../../ui/components/personalizarPerfil/FormDescricao/formDescricao'
import BotaoFormularioGlobal from '../../../../../ui/components/global/BotaoFormularioGlobal/BotaoFormularioGlobal'

const AjudaSuporte = () => {
  return (
    <>
    <div className='containerAjudaSuporte'>

      <div className='containerAjudaSuporte_header'>
        <Link to={'/menu/configuracoes'}>
          <img src={setaEsquerda} alt="" />
        </Link>
          <p className='sobre'>AJUDA E SUPORTE</p>
          <div className='tituloEFoto__cardFoto'></div>
      </div>

      <div className='containerAjudaSuporte_main'>

          <p>Se você encontrou algum problema ou bug durante a utilização do App, ou tem alguma sugestão de melhoria, deixe-nos saber para que possamos resolver e/ou melhorar o App. Envie uma mensagem breve do problema ou da sugestão e insira seu e-mail para contato. Agradecemos a ajuda!</p>

          <div className='email'>
            <p>Dígite seu e-mail:</p>
            <InputGlobal/>
          </div>

          <div className='descricao'>
            <p>Insira sua sugestão ou reporte de problema:</p>
            <FormDescricao
              type={'description'}
            />
          </div>

            <button className='button'>
              ENVIAR
            </button>

      </div>

    </div>
    </>
  )
}

export default AjudaSuporte