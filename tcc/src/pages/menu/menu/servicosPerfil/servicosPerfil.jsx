import React, { useState } from 'react'
import './styleServicosPerfil.css'
import InputGlobal from '../../../../ui/components/global/InputGlobal/InputGlobal'
import setaEsquerda from './images/setaEsquerda.svg'
import iconFiltro from './images/filtro.svg'
import {Link} from 'react-router-dom'
import ModalLocalizacao from '../../../../ui/components/global/Modal/Modal'
import ComboBoxLocalizacao from '../../../../ui/components/personalizarPerfil/ComboBoxLocalizacao/ComboBoxLocalizacao'
import UserContext from '../../../../data/hooks/context/UserContext'
import { useContext } from 'react'

import imagemPerfil from "./images/imagemPerfil.png"

const servicosPerfil = () => {

  const {idServico} = useContext(UserContext)

  console.log(idServico)

  const [openModal, setOpenModal] = useState(false)

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

            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>

            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>
            <div className="tagPerfil">
              <img src={imagemPerfil} className="imagemPerfil" />
              <p className='nomePerfil'>Beltrana dos Santos</p>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}

export default servicosPerfil