import React, { useEffect, useState, useContext } from 'react'
import './styleServicos.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import UserContext from '../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../data/services/api/ApiService'
import { useNavigate } from 'react-router-dom'

function Servicos() {

  const navigator = useNavigate()

  const {acessToken} = useContext(UserContext)

  const {idServico, setIdServico} = useContext(UserContext)
  
  const [value, setValue] = useState(0)

  const [listaCategorias, setListaCategorias] = useState()
  const [listaTags, setListaTags] = useState()
  const [busca, setBusca] = useState('')

  useEffect(() => {
    getTagsGeral()
  }, [])

  useEffect(() => {
    getCategorias()
  }, [])

  const setServico = (e) => {
      setIdServico(e)
      navigator('/menu/servicos/perfil')
  }


  const getCategorias = async () => {
    try {
      const response = await blogFetch.get('/categoria/select_all', {
        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
      })

      
      setListaCategorias(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const getTagsGeral = async () => {
    try {
      const response = await blogFetch.get('/tag',  {
        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
      })

      setListaTags(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    
      <div className='containerServicos'>

        <div className='containerServicos__apresentacaoServicos'>
          <p>
            SERVIÇOS
          </p>

          <div className='apresentacaoServicos__inputPesquisar'>
            <InputGlobal
              onChange={setBusca}
              type={'search'}
              placeholder={'Procurar um serviço'}
            ></InputGlobal>
          </div>

          <div className='containerServicos__cardFoto'></div>

        </div>

        <div className="containerServicos__tituloFiltros">
          <span>FILTROS</span>
        </div>

        <section className="containerServicos__secaoDeFiltros">

          <ul className='secaoDeFiltros__listaDeFiltros'>

            <li onClick={(e) => setValue(0)} className='listaDeFiltros__filtro'>Geral</li>

            {
              listaCategorias === undefined ? (
                  <p>Carregando</p>
              ) : (
                listaCategorias.categorias.map((item) => (
                  <li onClick={(e) => setValue(item.id)} key={item.id} className='listaDeFiltros__filtro'>
                    {item.nome}
                  </li>
                ))
              )
            }

          </ul>

        </section>

        <section className='containerServicos__secaoDeTags'>
          <div className='secaoTags__listaTags'>
            
            {
              listaTags === undefined ? (
                <p></p>
              ) : (
                listaTags.tags.filter((item) => {
                  return busca.toLowerCase == '' ? item : item.nome.toLowerCase().includes(busca)
                }).map((tag) => {

                  if (tag.id_categoria == value) {

                    return (

                      <div className='tag' onClick={() => setServico(tag.id_tag)}>
                          <img src={tag.imagem} className="imagem_Tag" />
                          <p className='textoTag' key={tag.id_tag}>{tag.nome}</p>
                        </div>
                      
                    )

                  } else if (value == 0) {

                    return (

                      <div className='tag' onClick={() => setServico(tag.id_tag)}>
                          <img src={tag.imagem} className="imagem_Tag" />
                          <p className='textoTag' key={tag.id_tag}>{tag.nome}</p>
                        </div>
                      
                    )

                  } else {

                    return (
                      <></>
                    )

                  }
                
                })
              )
            }

          </div>
        </section>
      </div>
    </>
  )
}

export default Servicos