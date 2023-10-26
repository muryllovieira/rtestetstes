import React, { useEffect, useState, useContext } from 'react'
import "./styleExplorar.css"
import { Outlet } from 'react-router-dom'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'

function Explorar() {

  const {accessToken} = useContext(UserContext)

  const [listaPublicacoes, setListaPublicacoes] = useState()

  useEffect(() => {
    getPublicacoes()
  }, [])

  const getPublicacoes = async () => {
    try {
      const response = await blogFetch.get('/publicacao/select_all', {
        headers: {
          'x-access-token' : accessToken
        }
      })

      setListaPublicacoes(response.data)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='containerExplorar'>
        
        <Outlet/>

        <div className='containerExplorar__tituloEFoto'>
          <p>
            EXPLORAR
          </p>

          <div className='tituloEFoto__cardFoto'></div>

        </div>

        <section className='containerExplorar__secaoPublicacao'>

          <div className='secaoPublicacao__filtroPublicacao'>
            <span className='maisPopulares' activeClassName='selected'>MAIS POPULARES <i></i> </span>
            <span className='recentes' activeClassName='selected'>RECENTES <i></i> </span>
            
          </div>

          <div className='secaoPublicacao__listaPublicacoes'>


            {
              listaPublicacoes === undefined ?(
                <p>Carregando...</p>
              ) : (
                listaPublicacoes.publicacoes.map((data) => (
                  data.anexos.map((item) => (
                    <div className="cardPublicacao" key={data.id}>
                    <img src={item.anexo} className='fotoPublicacao' alt="" />
                  <div className='container_textos'>
                    <p className='nomePublicacao'>{data.titulo}</p>
                    <p className='descricaoPublicacao'>{data.descricao} <p>...</p> </p>
                  </div> 
                </div>
                  
                  ))
                ))
              )
            }

            
          </div>

        </section>

      </div>
    </>
  )
}

export default Explorar