import React, { useContext } from 'react'
import "./styleFormularioPersonalizarFoto.css"
import setaEsquerda from "../../../../pages/registrar/personalizarPerfil/personalizarFoto/images/setaEsquerda.svg"
import setaDireita from "../../../../pages/registrar/personalizarPerfil/personalizarFoto/images/setaDireita.svg"
import { Link } from 'react-router-dom'
import FormDescricao from '../FormDescricao/formDescricao'
import UserContext from '../../../../data/hooks/context/UserContext'
import blogFetch from '../../../../data/services/api/ApiService'

//components
import FotoPerfil from '../FotoPerfil/FotoPerfil.jsx'
import BotaoAncora from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'

function FormularioPersonalizarFoto({}) {

  const {userData} = useContext(UserContext)
  const {foto, setFoto} = useContext(UserContext)
  const {descricao, setDescricao} = useContext(UserContext)
  const {accessToken} = useContext(UserContext)

  console.log(descricao)
  console.log(foto)

  async function enviarDados() {
    try {
      const response = await blogFetch.put('/usuario/personalizar_perfil',{
          id: userData.id,
          nome: userData.nome,
          foto: userData.foto,
          descricao: userData.descricao
      },{
          headers: {
              'x-access-token' : accessToken.accessToken
          }
      } )
  
      console.log(response)
  
  } catch (error) {
      console.log(error)
      console.log(error.config.data)
  
      console.log('erro')
  }
  }



  return (
    <form className='formularioPersonalizarFoto' action="">

      <div className='formularioPersonalizarFoto__header'>
          <Link to={'/personalizar-perfil/personalizar-nome'}>
              <img src={setaEsquerda} alt="/personalizar-perfil/personalizar-nome" />
          </Link>
          <i onClick={enviarDados}>
            <img src={setaDireita} alt="/personalizar-perfil/personalizar-localizacao" />
          </i>
      </div>

      <div className='formularioPersonalizarFoto__main'>
        <h1>FOTO DE PERFIL E DESCRIÇÃO</h1>
        <FotoPerfil
          onChange={setFoto}
        ></FotoPerfil>
        <p>*A foto de perfil e a descrição não são obrigatórias.</p>

        <FormDescricao
          onChange={setDescricao}
        ></FormDescricao>
      </div>

      <div className='formularioPersonalizarFoto__footer'>
       <BotaoAncora titulo={"Pular"}></BotaoAncora>
      </div>

    </form>
  )
}

export default FormularioPersonalizarFoto