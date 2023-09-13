import React from 'react'
import "./styleMenuBarGlobal.css"
import { Link } from 'react-router-dom'


function MenuBarGlobal() {
  return (
    <div className='menuBarGlobal'>
        <div className='botaoExpandirComprimir'>

        </div>
        <Link className='link linkHome' to={'/menu/explorar'}>HOME</Link>
        <Link className='link linkHome' to={'/menu/servicos'}>SERVIÇOS</Link>
        <Link className='link linkHome' to={'/menu/publicar'}>PUBLICAR</Link>
        <Link className='link linkHome' to={'/menu/conversas'}>CONVERSAS</Link>
        <div className='botaoConfiguracoes'>
            <Link className='link linkHome' to={'/menu/configuracoes'}>CONFIGURAÇÕES</Link>
        </div>
    </div>
  )
}

export default MenuBarGlobal