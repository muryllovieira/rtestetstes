/* ***********
 * Autor: Marcelo G
 * Data Inicio: 04-09-2023
 * Data Fim: X
 * 
 * Commits: Rotas Definidas v0.2, Estruturação de Diretórios Concluída, 
 * Componentes Iniciados v2.4, Responsividade v0.6, Funcionalidades v0.4,
 * Integração Iniciada v0.5, Contexto Aplicado
 * 
*****************/

//Importe de Biblioteca
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//Importe de Página - Inicial
import Home from './src/pages/home/Home.jsx'

//páginas - rotas
import Login from "./src/pages/login/Login.jsx"
import RecuperarSenha from './src/pages/recuperarSenha/RecuperarSenha.jsx'
import Registrar from './src/pages/registrar/Registrar.jsx'
import ValidarCodigo from './src/pages/validarCodigo/ValidarCodigo.jsx'
import TrocaDeSenha from './src/pages/trocaDeSenha/TrocaDeSenha.jsx'
import Explorar from './src/pages/menu/menu/explorar/Explorar.jsx'
import Menu from './src/pages/menu/Menu.jsx'
import NaoEncontrado from './src/pages/naoEncontrado/naoEncontrado.jsx'

//páginas - rotas do Menu
import Servicos from './src/pages/menu/menu/servicos/Servicos.jsx'
import Publicar from './src/pages/menu/menu/publicar/Publicar.jsx'
import Conversas from './src/pages/menu/menu/conversas/Conversas.jsx'
import Configuracoes from './src/pages/menu/menu/configuracoes/Configuracoes.jsx'

import { UserProvider } from './src/data/hooks/context/userContext.jsx'

//Importe Estilo Global
import './src/ui/styles/global.css'



//Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registrar",
    element: <Registrar />
  },
  {
    path: "/recuperar-senha",
    element: <RecuperarSenha />
  },
  {
    path: "/validar-codigo",
    element: <ValidarCodigo />
  },
  {
    path: "/troca-de-senha",
    element: <TrocaDeSenha />
  },
  {
    path: "/menu",
    element: <NaoEncontrado />
  },
  {
    element: <Menu />,
    children: [
      {
        path: "/menu/explorar",
        element: <Explorar />
      },
      {
        path: "/menu/servicos",
        element: <Servicos />
      },
      {
        path: "/menu/publicar",
        element: <Publicar />
      },
      {
        path: "/menu/conversas",
        element: <Conversas />
      },
      {
        path: "/menu/configuracoes",
        element: <Configuracoes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <RouterProvider router = {router} />
    </UserProvider>
  </React.StrictMode>,
)
