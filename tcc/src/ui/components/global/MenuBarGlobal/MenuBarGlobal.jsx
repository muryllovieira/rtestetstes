import React from 'react'
import "./styleMenuBarGlobal.css"
import AncoraMenu from '../../menu/AncoraMenu/AncoraMenu'
import IconObject from '../IconesGlobais/iconesGlobais'
import IconeMenuBar from '../../menu/IconeMenuBar/IconeMenuBar'
import { useState } from 'react'


function MenuBarGlobal() {

  const [ menu, setMenu] = useState(true)

  const handleOpenMenu = () => {
    setMenu(!menu)
  }

  if (menu) {
    return (
      <div className='menuBarGlobal'>
          <div onClick={handleOpenMenu} className='botaoExpandirComprimirAberto'>
              <IconeMenuBar ></IconeMenuBar>
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
                config={true}
                icon={IconObject.configuracoes}
                url={'/menu/configuracoes'}
                value={'CONFIGURAÇÕES'}
              ></AncoraMenu>
          </div>
  
      </div>
    )
  } else {
    return (
      <div onClick={handleOpenMenu} className='menuBarGlobalFechado'>
          <div onClick={handleOpenMenu} className='botaoExpandirComprimirFechado'>
              <IconeMenuBar></IconeMenuBar>
          </div>
  
          <div className='menuBarGlobal__ancorasMenuFechado'>
            <AncoraMenu
              troca={true}
              icon={IconObject.home}
              url={'/menu/explorar'}
            ></AncoraMenu>
            <AncoraMenu
              troca={true}
              icon={IconObject.servicos}
              url={'/menu/servicos'}
            ></AncoraMenu>
             
            <AncoraMenu
              troca={true}
              publicar={true}
              icon={IconObject.publicar}
              url={'/menu/publicar'}
            ></AncoraMenu>
              
            <AncoraMenu
            troca={true}
              icon={IconObject.conversas}
              url={'/menu/conversas'}
            ></AncoraMenu>

            <AncoraMenu
              troca={true}
              icon={IconObject.perfil}
              url={'/menu/meu-perfil'}
            ></AncoraMenu>
            
          </div>
          
          <div className='botaoConfiguracoes'>
              <AncoraMenu
                troca={true}
                icon={IconObject.configuracoes}
                url={'/menu/configuracoes'}
              ></AncoraMenu>
          </div>
  
      </div>
    )
  }
}

export default MenuBarGlobal