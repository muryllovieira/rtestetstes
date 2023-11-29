import React, { useEffect, useState, useContext } from 'react'
import "./styleExplorar.css"
import { Outlet } from 'react-router-dom'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'
import ModalPublicacaoExplorar from '../../../../ui/components/menu/explorar/ModalPublicacaoExplorar/ModalPublicacaoExplorar'
import CardPublicacaoExplorar from '../../../../ui/components/menu/explorar/CardPublicacaoExplorar/CardPublicacaoExplorar'
import FotoPerfil from '../../../../ui/components/global/FotoPerfil/FotoPerfil'

function Explorar() {

  const { accessToken, id } = useContext(UserContext)

  const [listaPublicacoesPopulares, setListaPublicacoesPopulares] = useState()
  const [listaPublicacoesRecentes, setListaPublicacoesRecentes] = useState()

  const [populares, setPopulares] = useState(true)
  const [atualizar, setAtualizar] = useState(true)

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getPublicacoesPopulares()
  }, [])

  useEffect(() => {
    getPublicacoesRecentes()
  }, [])

  useEffect(() => {
    getPublicacoesRecentes()
  }, [atualizar])

  const getPublicacoesPopulares = async () => {
    try {
      const response = await blogFetch.get('/publicacao/populares', {
        headers: {
          'x-access-token': accessToken
        }
      })

      console.log(response.data)
      setListaPublicacoesPopulares(response.data)
      

    } catch (error) {
      console.log(error)
    }
  }

  const getPublicacoesRecentes = async () => {
    try {
      const response = await blogFetch.get('/publicacao/select_all', {
        headers: {
          'x-access-token': accessToken
        }
      })

      setListaPublicacoesRecentes(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='containerExplorar'>

        <Outlet />

        <div className='containerExplorar__tituloEFoto'>
          <p>
            EXPLORAR
          </p>

          <FotoPerfil/>

        </div>

        <section className='containerExplorar__secaoPublicacao'>

          <div className='secaoPublicacao__filtroPublicacao'>

            <span className={`filtroPublicacao__maisPopulares ${populares == true ? "filtroPublicacao__maisPopularesAtivado" : ""}`} onClick={() => {
              if (populares == false) {
                setPopulares(!populares)
              }


            }}>MAIS POPULARES <i></i> </span>

            <span className={`filtroPublicacao__recentes ${populares == false ? "filtroPublicacao__recentesAtivado" : ""}`} onClick={() => {
              if (populares == true) {
                setPopulares(!populares)
              }
            }}>RECENTES <i></i> </span>

          </div>

          <div className='secaoPublicacao__listaPublicacoes'>

            {
              populares == true ? (
                <div className='listaPublicacao__containerPublicacao'>

                  {
                    listaPublicacoesPopulares === undefined ? (
                      <p>Carregando...</p>
                    ) : (
                      listaPublicacoesPopulares.publicacao.map((item) => (

                        

                        item === undefined ? (
                          <p>Carregando...</p>
                        ) : (
                          <CardPublicacaoExplorar
                          atualizar={atualizar}
                          setAtualizar={setAtualizar}
                          accessToken={accessToken}
                          key={item.id}
                          anexosPublicacao={item.anexos}
                          descricaoPublicacao={item.descricao}
                          fotoPublicacao={item.anexos[0].anexo}
                          idPublicacao={item.id}
                          idUsuario={id}
                          nomePublicacao={item.titulo}
                        ></CardPublicacaoExplorar>
                        )

                      ))
                    )
                  }

                </div>
              ) : (
                <div className='listaPublicacao__containerPublicacao'>
                  {

                    listaPublicacoesRecentes === undefined ? (
                      <p>Carregando...</p>
                    ) : (
                      listaPublicacoesRecentes.publicacoes.map((item) => (
                        <CardPublicacaoExplorar
                          accessToken={accessToken}
                          key={item.id}
                          anexosPublicacao={item.anexos}
                          descricaoPublicacao={item.descricao}
                          fotoPublicacao={item.anexos[0].anexo}
                          idPublicacao={item.id}
                          idUsuario={id}
                          nomePublicacao={item.titulo}
                        ></CardPublicacaoExplorar>
                      ))
                    )

                  }
                </div>
              )
            }

          </div>

        </section>

      </div>
    </>
  )
}

export default Explorar