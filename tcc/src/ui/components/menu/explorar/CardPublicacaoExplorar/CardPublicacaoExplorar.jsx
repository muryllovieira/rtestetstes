import React from 'react'
import './styleCardPublicacaoExplorar.css'
import { useState, useEffect } from 'react'
import ModalPublicacaoExplorar from '../ModalPublicacaoExplorar/ModalPublicacaoExplorar'
import blogFetch from '../../../../../data/services/api/ApiService'

function CardPublicacaoExplorar({ idUsuario, idPublicacao, nomePublicacao, descricaoPublicacao, accessToken, fotoPublicacao, anexosPublicacao }) {

    const [openModal, setOpenModal] = useState(false)
    const [anexo, setAnexo] = useState([])
    const [publicacao, setPublicacao] = useState()

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

    return (
        <>
      {
        anexo.length == 0 ? (
          <p>Carregando...</p>
        ) : (
          <ModalPublicacaoExplorar
            idPublicacao={idPublicacao}
            idUsuario={idUsuario}
            anexosPublicacao={anexo}
            accessToken={accessToken}
            dadosPublicacao={publicacao} 
            isOpen={openModal}
            setModalOpen={setOpenModal}
            descricaoPublicacao={descricaoPublicacao}
            tituloPublicacao={nomePublicacao}
          ></ModalPublicacaoExplorar>
        )
      }

      <div key={idPublicacao} className="cardPublicacao" onClick={() => {
        setOpenModal(!openModal)
        pegarPublicacao()
      }}>

        <div className='cardPublicacaoMeuPerfil__containerImagem'>
          <img className='containerImagem__imagemPublicacao' src={fotoPublicacao} alt="" />
        </div>


        <p className='cardPublicacaoMeuPerfil__tituloPublicacao'>
          {nomePublicacao}
        </p>

        <p className='cardPublicacaoMeuPerfil__descricaoUsuario'>
          {descricaoPublicacao}
        </p>

      </div>
    </>
    )
}

export default CardPublicacaoExplorar