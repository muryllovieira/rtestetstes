import React, { useState, useEffect, useContext } from 'react'
import "./styleFormularioPersonalizarTags.css"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaEsquerda.svg"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarTags/images/setaDireita.svg"
import {Link} from "react-router-dom"
import BotaoTag from '../BotaoTag/BotaoTag'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'

const FormularioPersonalizarTags = () => {

  const {acessToken} = useContext(UserContext)

  const [value, setValue] = useState('')
  const [todasTags, setTodasTags] = useState(false)

  const [listaCategorias, setListaCategorias] = useState()
  const [listaTags, setListaTags] = useState()

  useEffect(() => {
    console.log(value)
    pegarTags()
  }, [value])

  useEffect(() => {
    pegarTagsGeral()
  },[todasTags])

  useEffect(() => {
   pegarCategorias()
  })


  const pegarCategorias = async () => {
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

  const pegarTagsGeral = async () => {
    try {
      const response = await blogFetch.post('/tag/tag_by_categoria', {
        categoria: 'geral'
      }, {

        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
         
      })

      console.log(response)
      setListaTags(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const pegarTags = async () => {
    try {
      const response = await blogFetch.post('/tag/tag_by_categoria', {
        categoria: value
      }, {

        headers: {
          'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjcyLCJpYXQiOjE2OTY0NDQzMDUsImV4cCI6MTcyNjQ0NDMwNX0.pfoTKnxsk657GBajP5280y-TVifVlRBcdV8ClTtJick'
        }
         
      })

      console.log(response)
      setListaTags(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form className='formularioPersonalizarTags' action=''>
        <div className='formularioPersonalizarTags__header'>
          <Link to={'/personalizar-perfil/personalizar-tipo'}>
            <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-tipo" />
          </Link>
          <Link to={'/menu/explorar'}>
            <img src={setaDireita} alt="/menu/explorar" />
          </Link>
        </div>

        <div className='formularioPersonalizarTags__main'>
            <h1>TAGS DE SERVIÇO</h1>
            <p className='subtitle'>*As tags de serviço são utilizadas pelas costureiras para identificar que tipo de serviço elas prestam.</p>

            <h2 className='main__tituloFiltros'>FILTROS</h2>

            <ul className='main__listaFiltros'>

              <li onClick={(e) => setTodasTags(!todasTags)} className='tagsGeral'>Geral</li>

              {
                 listaCategorias === undefined ? (
                  <p>Carregando</p>
                 ) : (
                  listaCategorias.cateorias.map((item) => (
                    <li onClick={(e) => setValue(item.nome)} key={item.id} className='tagsGeral'>
                      {item.nome}
                    </li>
                  ))
                  
                 )
              }
            </ul>

            <div className='tagsList'>
                {/* <BotaoTag text={'Costura'}></BotaoTag> */}

                {
                  listaTags === undefined ? (
                    <p>Carregando</p>
                  ) : (
                    listaTags.tags.map((item) => (
                      <BotaoTag key={item.id_tag} text={item.nome}></BotaoTag>
                    ))
                  )
                }

            </div>
        </div>
    </form>
  )
}

export default FormularioPersonalizarTags