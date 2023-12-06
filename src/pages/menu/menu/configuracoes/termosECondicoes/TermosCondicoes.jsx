import React from 'react'
import './styleTermosCondicoes.css'
import setaEsquerda from '../images/setaEsquerda.svg'
import {Link} from 'react-router-dom'
import FotoPerfil from '../../../../../ui/components/global/FotoPerfil/FotoPerfil'

const TermosCondicoes = () => {
  return (
    <>
    <div className='containerTermosCondicoes'>

      <div className='containerTermosCondicoes_header'>

      <Link to={'/menu/configuracoes'}>
          <img src={setaEsquerda} alt="" />
        </Link>
          <p className='sobre'>TERMOS E CONDICOES</p>
          <FotoPerfil/>
      </div>

      <div className='containerTermosCondicoes_main'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, corrupti ex esse fuga expedita nulla consequatur porro, numquam at, error eum tempore eaque soluta. Quae a veritatis ratione deserunt sunt.</p>
      </div>

    </div>
    </>
  )
}

export default TermosCondicoes