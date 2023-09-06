/* ***********
 * Autor: Marcelo G
 * Data Inicio: 04-09-2023
 * Data Fim: X
 * 
 * Commits: Rotas Definidas v0.1, Estruturação de Diretórios Concluída, Componentes Iniciados v0.1
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
import Registrar from './src/pages/registrar/Registrar.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
