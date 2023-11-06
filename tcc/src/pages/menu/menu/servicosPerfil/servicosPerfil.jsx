import React, { useEffect, useState } from 'react'
import './styleServicosPerfil.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import setaEsquerda from './images/setaEsquerda.svg'
import iconFiltro from './images/filtro.svg'
import {Link, useNavigate} from 'react-router-dom'
import ModalLocalizacao from '../../../../ui/components/global/Modal/Modal'
import ComboBoxLocalizacao from '../../../../ui/components/personalizarPerfil/ComboBoxLocalizacao/ComboBoxLocalizacao'
import UserContext from '../../../../data/hooks/context/UserContext'
import { useContext } from 'react'
import CardPerfil from '../../../../ui/components/menu/servicosPerfil/CardPerfil/CardPerfil'
import blogFetch from '../../../../data/services/api/ApiService'

const ServicosPerfil = () => {

  const navigator = useNavigate()

  const {idServico} = useContext(UserContext)
  const {nomeTagServico} = useContext(UserContext)

  const {idPerfil, setIdPerfil} = useContext(UserContext)

  const {accessToken} = useContext(UserContext)

  const [listaPerfis, setListaPerfis] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [busca, setBusca] = useState('')

  useEffect(() => {
    pegarPerfis()
  }, [])

  const pegarPerfis = async () => {

    try {
      const response = await blogFetch.post('/usuario/select_by_tag', {
        id_tag: idServico,
        nome_tag: nomeTagServico
      }, {
        headers: {
          'x-access-token' : accessToken
        }
      })

      console.log(response.data)
      setListaPerfis(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className="containerServicosPerfil">

         <div className="containerServicosPerfil__header">

           <Link to={"/menu/servicos"}>
              <img src={setaEsquerda} className="botaoVoltar" />
           </Link>
           
           <div className='pesquisaPerfil'>
           <div className="header__inputPesquisar">
           <InputGlobal
              onChange={setBusca}
              type={'search'}
              placeholder={'Procurar um perfil'}
            ></InputGlobal>
             <img src={iconFiltro} className='iconeFiltro' onClick={() => setOpenModal(true)}/>
           </div>

           <div>
             <ModalLocalizacao isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <ComboBoxLocalizacao></ComboBoxLocalizacao>
             </ModalLocalizacao>
           </div>
           </div>
           

          <Link to={"/menu/meu-perfil"}>
              <div className="cardFoto"></div>
          </Link>
           
         </div>

        <section className='containerServicos__secaoDeTags'>
          <div className='listaPerfis'>

            {
              listaPerfis.length === 0 ? (
                <>Carregando</>
              ) : (
                listaPerfis.usuarios.filter((item) => {

                    const buscaPequena = busca.toLowerCase()

                    return buscaPequena.toLowerCase() == '' ? item : item.nome.toLowerCase().includes(buscaPequena)

                }).map((item) => (
                  <CardPerfil
                    onClick={() => {
                        setIdPerfil(item.id_usuario)
                        
                        navigator('/menu/servicos/perfil/perfil-selecionado')
                     }}
                    key={item.id}
                    nome={item.nome}
                    img={item.foto}
                  ></CardPerfil>
                ))
              )
            }
            
          </div>
        </section>

      </div>
    </>
  )
}

export default ServicosPerfil