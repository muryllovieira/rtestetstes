/* ***********
 * Autor: Marcelo G, Alexssandro S, Mateus A
 * Data Inicio: 04-09-2023
 * Data Fim: X
 * 
 * Commits: Rotas Definidas v0.8, Estruturação de Diretórios Concluída, 
 * Componentes Iniciados v2.44, Responsividade v0.7, Funcionalidades v0.19,
 * Integração Iniciada v0.33, Contexto Aplicado, Lista Icones v0.4, Conflito v0.4, Ajustes v0.2,
 *  
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
import NaoEncontrado from './src/pages/naoEncontrado/NaoEncontrado.jsx'
import MeuPerfil from './src/pages/menu/menu/perfil/MeuPerfil.jsx'

//páginas - rotas do Menu
import Servicos from './src/pages/menu/menu/servicos/Servicos.jsx'
import Publicar from './src/pages/menu/menu/publicar/Publicar.jsx'
import Conversas from './src/pages/menu/menu/conversas/Conversas.jsx'
import Configuracoes from './src/pages/menu/menu/configuracoes/Configuracoes.jsx'
import ServicosPerfil from './src/pages/menu/menu/servicosPerfil/servicosPerfil.jsx'
import PerfilSelecionado from './src/pages/menu/menu/perfilSelecionado/PerfilSelecionado.jsx'
import Chat from './src/pages/menu/menu/chat/Chat.jsx'

//páginas - rotas de Personalização
import PersonalizarNome from './src/pages/registrar/personalizarPerfil/personalizarNome/PersonalizarNome.jsx'
import PersonalizarFoto from './src/pages/registrar/personalizarPerfil/personalizarFoto/PersonalizarFoto.jsx'
import PersonalizarLocalizacao from './src/pages/registrar/personalizarPerfil/personalizarLocalizacao/PersonalizarLocalizacao.jsx'
import PersonalizarTipo from './src/pages/registrar/personalizarPerfil/personalizarTipo/PersonalizarTipo.jsx'
import PersonalizarTags from './src/pages/registrar/personalizarPerfil/personalizarTags/PersonalizarTags.jsx'

//paginas - rotas de configuracao
import Sobre from './src/pages/menu/menu/configuracoes/sobre/Sobre.jsx'
import AjudaSuporte from './src/pages/menu/menu/configuracoes/ajudaSuporte/AjudaSuporte.jsx'
import TermosCondicoes from './src/pages/menu/menu/configuracoes/termosECondicoes/TermosCondicoes.jsx'
import SuaConta from './src/pages/menu/menu/configuracoes/suaConta/SuaConta.jsx'
import AlterarEmail from './src/pages/menu/menu/configuracoes/alterarEmail/AlterarEmail.jsx'
import AlterarSenha from './src/pages/menu/menu/configuracoes/alterarSenha/AlterarSenha.jsx'


import { UserProvider } from './src/data/hooks/context/UserContext.jsx'

//Importe Estilo Global
import './src/ui/styles/global.css'

//Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/registrar",
    element: <Registrar />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/personalizar-perfil/personalizar-nome",
    element: <PersonalizarNome />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/personalizar-perfil/personalizar-foto",
    element: <PersonalizarFoto />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/personalizar-perfil/personalizar-localizacao",
    element: <PersonalizarLocalizacao />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/personalizar-perfil/personalizar-tipo",
    element: <PersonalizarTipo />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/personalizar-perfil/personalizar-tags",
    element: <PersonalizarTags />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/recuperar-senha",
    element: <RecuperarSenha />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/validar-codigo",
    element: <ValidarCodigo />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/troca-de-senha",
    element: <TrocaDeSenha />,
    errorElement: <NaoEncontrado />,
  },
  {
    path: "/menu",
    element: <NaoEncontrado />
  },
  {
    element: <Menu />,
    errorElement: <NaoEncontrado />,
    children: [
      {
        path: "/menu/explorar",
        element: <Explorar />,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/explorar/publicar/",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/servicos",
        element: <Servicos />,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/servicos/publicar/",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/servicos/perfil",
        element: <ServicosPerfil />,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/servicos/perfil/publicar",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/servicos/perfil/perfil-selecionado",
        element: <PerfilSelecionado/>,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/servicos/perfil/perfil-selecionado/publicar",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/conversas",
        element: <Conversas />,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/conversas/publicar/",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/conversas/chat",
        element: <Chat/>,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/conversas/chat/publicar/",
            element: <Publicar />
          }
        ]
      },
      {
        path: "/menu/configuracoes",
        element: <Configuracoes />,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/sobre",
        element: <Sobre/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/ajuda-suporte",
        element: <AjudaSuporte/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/termos-condicoes",
        element: <TermosCondicoes/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/sua-conta",
        element: <SuaConta/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/sua-conta/alterar-email",
        element: <AlterarEmail/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/configuracoes/sua-conta/alterar-senha",
        element: <AlterarSenha/>,
        errorElement: <NaoEncontrado />,
      },
      {
        path: "/menu/meu-perfil",
        element: <MeuPerfil />,
        errorElement: <NaoEncontrado />,
        children: [
          {
            path: "/menu/meu-perfil/publicar",
            element: <Publicar />
          }
        ]
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
