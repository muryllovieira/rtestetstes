import React from 'react'
import './styleSobre.css'
import setaEsquerda from '../images/setaEsquerda.svg'
import {Link} from 'react-router-dom'
import FotoPerfil from '../../../../../ui/components/global/FotoPerfil/FotoPerfil'

const Sobre = () => {
  return (
    <>
    <div className='containerSobre'>

      <div className='containerSobre_header'>

        <Link to={'/menu/configuracoes'}>
          <img src={setaEsquerda} alt="" />
        </Link>
          <p className='sobre'>SOBRE</p>
          <FotoPerfil/>

      </div>

      <div className='containerSobre_main'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo, esse necessitatibus in iure quae qui dolore nesciunt est rerum pariatur hic dignissimos facilis, aspernatur ex optio corrupti voluptatum cumque.
          </p>
      </div>

    </div>
    </>
  )
}

export default Sobre