/* ***********
 * Autor: Marcelo G
 * Data Inicio: 04-09-2023
 * Data Fim: X
 * 
 * Commits: Rotas Definidas v0.1
 * Tela Home Costuriê
*****************/

//Importe de Biblioteca
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//Importe de Página
import Home from './Home.jsx'

//Importe de Estilo
import './css/index.css'

//páginas
import Login from "./routes/Login"

//Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
