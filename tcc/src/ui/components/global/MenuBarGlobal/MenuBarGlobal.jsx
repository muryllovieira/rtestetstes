import React from 'react'
import "./styleMenuBarGlobal.css"
import AncoraMenu from '../../menu/AncoraMenu/AncoraMenu'
import IconObject from '../IconesGlobais/iconesGlobais'
import IconeMenuBar from '../../menu/IconeMenuBar/IconeMenuBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const RouteObject = {
  rotas: [
    {
      id: 0,
      nome: 'EXPLORAR',
      path: '/menu/explorar',
      publicar: 'explorar',
      icone: IconObject.home
    },
    {
      id: 1,
      nome: 'SERVIÇOS',
      path: '/menu/servicos',
      publicar: 'servicos',
      icone: IconObject.servicos
    },
    {
      id: 2,
      nome: 'PUBLICAR',
      path: '',
      publicar: true,
      icone: IconObject.publicar
    },
    {
      id: 3,
      nome: 'CONVERSAS',
      path: '/menu/conversas',
      publicar: 'conversas',
      icone: IconObject.conversas
    },
    {
      id: 4,
      nome: 'MEU PERFIL',
      path: '/menu/meu-perfil',
      publicar: 'meu-perfil',
      icone: IconObject.perfil
    }
    
  ]
}

function MenuBarGlobal() {

  const [value, setValue] = useState('explorar')

  const location = useLocation()

  const [ menu, setMenu] = useState(false)

  const handleOpenMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    console.log(value)
  },[value])

  if (menu) {
    return (
      <div className='menuBarGlobal'>
          <div onClick={handleOpenMenu} className='botaoExpandirComprimirAberto'>
              <IconeMenuBar func={handleOpenMenu} aberto={menu} ></IconeMenuBar>
          </div>
  
          <div className='menuBarGlobal__ancorasMenu'>


            {
              RouteObject.rotas.map((rota) => {
                if(rota.publicar == true) {
                  return (
                    <AncoraMenu
                      
                      icon={rota.icone}
                      url={`menu/${value}/publicar`}
                      value={rota.nome}
                      publicar={rota.publicar}
                    ></AncoraMenu>
                  )
                } else {
                  return (
                      <AncoraMenu
                        onClick={() => {
                          setValue(rota.publicar)
                        }}
                        icon={rota.icone}
                        url={rota.path}
                        value={rota.nome}
                      ></AncoraMenu>
                      
                  )
                }
              })
            }

            
            
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
      <div className='menuBarGlobalFechado'>
          <div onClick={handleOpenMenu} className='botaoExpandirComprimirFechado'>
              <IconeMenuBar  func={handleOpenMenu} aberto={menu} ></IconeMenuBar>
          </div>
  
          <div className='menuBarGlobal__ancorasMenuFechado'>
            
          {
              RouteObject.rotas.map((rota) => {
                if(rota.publicar == true) {
                  return (
                    <AncoraMenu
                      troca={true}
                      icon={rota.icone}
                      url={`menu/${value}/publicar`}
                      value={rota.nome}
                      publicar={rota.publicar}
                    ></AncoraMenu>
                  )
                } else {
                  return (
                      <AncoraMenu
                        onClick={() => {
                          setValue(rota.publicar)
                        }}
                        troca={true}
                        icon={rota.icone}
                        url={rota.path}
                        value={rota.nome}
                      ></AncoraMenu>
                      
                  )
                }
              })
            }
            
          </div>
          
          <div className='botaoConfiguracoesFechado'>
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