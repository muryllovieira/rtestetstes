import React from 'react'
import "./styleMenuBarGlobal.css"
import AncoraMenu from '../../menu/ancoraMenu/AncoraMenu'
import IconObject from '../IconesGlobais/iconesGlobais'



function MenuBarGlobal() {

  return (
    <div className='menuBarGlobal'>
        <div className='botaoExpandirComprimir'>

        </div>

        <div className='menuBarGlobal__ancorasMenu'>
          <AncoraMenu
            icon={IconObject.home}
            url={'/menu/explorar'}
            value={'EXPLORAR'}
          ></AncoraMenu>
          <AncoraMenu
            icon={IconObject.servicos}
            url={'/menu/servicos'}
            value={'SERVIÇOS'}
          ></AncoraMenu>
           
          <AncoraMenu
            publicar={true}
            icon={IconObject.publicar}
            url={'/menu/publicar'}
            value={'PUBLICAR'}
          ></AncoraMenu>
            
          <AncoraMenu
            icon={IconObject.conversas}
            url={'/menu/conversas'}
            value={'CONVERSAS'}
          ></AncoraMenu>
          <AncoraMenu
            icon={IconObject.perfil}
            url={'/menu/meu-perfil'}
            value={'MEU PERFIL'}
          ></AncoraMenu>
          
        </div>
        
        <div className='botaoConfiguracoes'>
            <AncoraMenu
              icon={IconObject.configuracoes}
              url={'/menu/configuracoes'}
              value={'CONFIGURAÇÕES'}
            ></AncoraMenu>
        </div>

    </div>
  )
}

export default MenuBarGlobal