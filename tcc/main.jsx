/* ***********
 * Autor: Marcelo G
 * Data Inicio: 04-09-2023
 * Data Fim: X
 * 
 * Commits: Rotas Definidas v0.1, Estruturação de Diretórios Concluída, Componentes Iniciados v0.4
 * Tela Home Costuriê
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
    element: <RecuperarSenha/>
  },
  {
    path: "/validar-codigo",
    element: <ValidarCodigo/>
  },
  {
    path: "/troca-de-senha",
    element: <TrocaDeSenha/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
