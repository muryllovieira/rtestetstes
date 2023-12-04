import React, { useContext } from 'react'
import './styleConfiguracoes.css'
import setaDireita from './images/setaDireita.png'
import exit from './images/exit.png'
import {Link} from 'react-router-dom'
import FotoPerfil from '../../../../ui/components/global/FotoPerfil/FotoPerfil'
import UserContext from '../../../../data/hooks/context/UserContext'

function Configuracoes() {

  const {setAccessToken} = useContext(UserContext)

  return (
    <>
    <div className='containerConfigurar'>
      <div className='containerConfiguracoes'>

        <div className='containerExplorar__tituloEFoto'>
          <p>
            Configurações
          </p>
        <FotoPerfil/>
        </div>

        <div className='containerConfiguracoes_main'>

      <Link to={"/menu/configuracoes/sua-conta"}>
          <div className="botoesConfiguracao">
            <div className='textos'>
              <h1 className='titulo'>SUA CONTA</h1>
              <img src={setaDireita} className='seta' />
            </div>
          </div>
      </Link>

      <Link to={"/menu/configuracoes/termos-condicoes"}>
          <div className="botoesConfiguracao">
            <div className='textos'>
              <h1 className='titulo'>TERMOS E CONDIÇÕES</h1>
              <img src={setaDireita} className='seta' />
            </div>
          </div>
      </Link>

      <Link to={"/menu/configuracoes/ajuda-suporte"}>
        <div className="botoesConfiguracao">
          <div className='textos'>
            <h1 className='titulo'>AJUDA E SUPORTE</h1>
            <img src={setaDireita} className='seta' />
          </div>
        </div>
      </Link>

      <Link to={"/menu/configuracoes/sobre"}>
        <div className="botoesConfiguracao">
          <div className='textos'>
            <h1 className='titulo'>SOBRE</h1>
            <img src={setaDireita} className='seta' />
          </div>
        </div>
      </Link>

    </div>
  </div>

      <Link to={"/"}>
        <div className='containerConfiguracoes_footer'>
          <button className='botaoSair'>
            <div className='textos'>
              <h1 className='titulo_sair'>SAIR</h1>
              <img src={exit} alt="" />
            </div>
          </button>
        </div>
      </Link>

</div>
    </>
  )

}

export default Configuracoes