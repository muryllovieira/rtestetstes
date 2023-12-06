import React from 'react'
import './styleCardPublicacaoExplorar.css'
import { useState, useEffect } from 'react'
import ModalPublicacaoExplorar from '../ModalPublicacaoExplorar/ModalPublicacaoExplorar'
import blogFetch from '../../../../../data/services/api/ApiService'

function CardPublicacaoExplorar({ atualizar, setAtualizar ,idUsuario, idPublicacao, nomePublicacao, descricaoPublicacao, accessToken, fotoPublicacao, anexosPublicacao }) {

  const [openModal, setOpenModal] = useState(false)
  const [anexo, setAnexo] = useState([])
  const [publicacao, setPublicacao] = useState()

  const [usuario, setUsuario] = useState()

  useEffect(() => {
    console.log(publicacao)
  }, [publicacao])

  const listarAnexosPublicacao = () => {

    const listaAnexos = []

    anexosPublicacao.map((anexo, indice) => {
      listaAnexos.push(anexo.anexo)
    })

    return listaAnexos
  }

  useEffect(() => {

    const lista = listarAnexosPublicacao()

    if (lista.length == 0) {
      return false
    } else {
      setAnexo(lista)
    }

  }, [anexosPublicacao])

  // useEffect(() => {
  //   pegarUsuario()
  // }, [publicacao])

  const pegarPublicacao = async () => {
    try {
      const response = await blogFetch.get(`/publicacao/select_by_id/${idPublicacao}`, {
        headers: {
          'x-access-token': accessToken
        }
      })

      setPublicacao(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  // const pegarUsuario = async () => {
  //   try {
  //     const response = await blogFetch.get(`/usuario/meu_perfil/${idUsuario}`, {
  //       headers: {
  //         'x-access-token': accessToken
  //       }
  //     })

  //     console.log(response)
  //     setUsuario(response.data)

  //   } catch (error) {

  //     console.log(response)

  //   }
  // }

  return (
    <>
      {
        anexo.length == 0 ? (
          <p>Carregando...</p>
        ) : (
          <ModalPublicacaoExplorar
            
            idUsuario={idUsuario}
            idPublicacao={idPublicacao}

            anexosPublicacao={anexo}
            dadosPublicacao={publicacao}

            accessToken={accessToken}
            isOpen={openModal}
            setModalOpen={setOpenModal}
            
            descricaoPublicacao={descricaoPublicacao}
            tituloPublicacao={nomePublicacao}
            
            usuarioPublicacao={usuario}
            atualizar={atualizar}
            setAtualizar={setAtualizar}
          ></ModalPublicacaoExplorar>
        )
      }

      <div key={idPublicacao} className="cardPublicacaoExplorar" onClick={() => {
        setOpenModal(!openModal)
        pegarPublicacao()
      }}>

        <div className='cardPublicacaoExplorar__containerImagem'>
          <img className='containerImagemExplorar__imagemPublicacaoExplorar' src={fotoPublicacao} alt="" />
        </div>


        <div>
          <p className='cardPublicacaoMeuExplorar__tituloPublicacao'>
            {nomePublicacao}
          </p>

          
        </div>

      </div>
    </>
  )
}

export default CardPublicacaoExplorar