import React, { useEffect, useState, useContext } from 'react'
import './styleServicos.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import UserContext from '../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../data/services/api/ApiService'

function Servicos() {

  const {acessToken} = useContext(UserContext)
  
  const [value, setValue] = useState('')
  const [allTags, setAllTags] = useState(false)

  const [listaCategorias, setListaCategorias] = useState()
  const [listaTags, setListaTags] = useState()

  useEffect(() => {
    getTags()
  }, [value])

  useEffect(() => {
    getTagsGeral()
  }, [allTags])

  useEffect(() => {
    getCategorias()
  })

  const getCategorias = async () => {
    try {
      const response = blogFetch.get('/categoria/select_all', {
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
      const response = await blogFetch.post('/tag/tag_by_categoria', {
        categoria: 'geral'
      }, {
        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
      })

      setListaTags(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const getTags = async () => {
    try {
      const response = await blogFetch.post('/tags/tag_by_categoria', {
        categoria: value
      }, {
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

            <li onClick={(e) => setAllTags(!allTags)} className='listaDeFiltros__filtro'>GERAL</li>

            {
              listaCategorias === undefined ? (
                  <p>Carregando</p>
              ) : (
                listaCategorias.categorias.map((item) => (
                  <li onClick={(e) => setValue(item.nome)} key={item.id} className='listaDeFiltros__filtro'>
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
                <p>Carregando</p>
              ) : (
                listaTags.tags.map((item) => (
                  <div className='tag'>
                    <p className='textoTag' key={item.id_tag}>{item.nome}</p>
                  </div>
                ))
              )
            }
            
          </div>
        </section>

      </div>

    </>
  )
}

export default Servicos