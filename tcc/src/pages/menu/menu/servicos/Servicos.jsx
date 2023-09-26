import React from 'react'
import './styleServicos.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import IconObject from '../../../../ui/components/global/IconesGlobais/iconesGlobais'

function Servicos() {
  return (
    <>
    
      <div className='containerServicos'>

        <div className='containerServicos__apresentacaoServicos'>
          <p>
            SERVIÇOS
          </p>

          <div className='apresentacaoServicos__inputPesquisar'>
            <InputGlobal
              type={'search'}
              placeholder={'Procurar um serviço'}
            ></InputGlobal>
            <i>{IconObject.home}</i>
          </div>

          <div className='containerServicos__cardFoto'></div>

        </div>

        <div className="containerServicos__tituloFiltros">
          <span>FILTROS</span>
        </div>

        <section className="containerServicos__secaoDeFiltros">
          <li className='secaoDeFiltros__listaDeFiltros'>
            <ul className='listaDeFiltros__filtro'>
              GERAL
            </ul>
            <ul className='listaDeFiltros__filtro'>
              ROUPAS
            </ul>
            <ul className='listaDeFiltros__filtro'>
              ACESSÓRIOS
            </ul>
            <ul className='listaDeFiltros__filtro'>
              AJUSTES
            </ul>
            <ul className='listaDeFiltros__filtro'>
              CORTE
            </ul>
            <ul className='listaDeFiltros__filtro'>
              GERAL
            </ul>
            <ul className='listaDeFiltros__filtro'>
              GERAL
            </ul>
          </li>
        </section>

        <section className='containerServicos__secaoDeTags'>
          <div className='secaoTags__listaTags'>

            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>
            <div className="tagTeste"></div>

          </div>
        </section>

      </div>

    </>
  )
}

export default Servicos