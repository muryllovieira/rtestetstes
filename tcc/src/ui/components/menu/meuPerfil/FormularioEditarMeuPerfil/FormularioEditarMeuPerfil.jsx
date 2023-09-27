import React from 'react'
import './styleFormularioEditarMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import UsuarioFotoEditar from '../../../../../pages/menu/menu/perfil/images/usuarioFotoEditar.svg'
import { useState, useContext, useEffect } from 'react'
import blogFetch from '../../../../../data/services/api/ApiService'
import UserContext from '../../../../../data/hooks/context/userContext'

function FormularioEditarMeuPerfil({open, nomePerfil, tagPerfil, cidadePerfil, estadoPerfil, bairroPerfil, descricaoPerfil}) {

    const { accessToken } = useContext(UserContext)
    const { id } = useContext(UserContext)

    const [estado, setEstado] = useState(estadoPerfil)
    const [cidade, setCidade] = useState(cidadePerfil)
    const [bairro, setBairro] = useState(bairroPerfil)
    const [descricao, setDescricao] = useState(descricaoPerfil)
    const [nome, setNome] = useState(nomePerfil)
    const [tagPerfilEditado, setTagPerfil] = useState(tagPerfil)

    const salvarNovosDadosPerfil = async () => {
        try {
            const response = await blogFetch.put('/usuario/editar_perfil', {
                headers: {
                    'x-access-token' : accessToken.accessToken
                },
                id_usuario: id,
                id_localizacao: 0,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                nome: nome,
                descricao: descricao,
                foto: null,
                nome_de_usuario: tagPerfilEditado,
                tags: null
            })
        } catch (error) {
            
        }
    }


  return (
    <>
       

        <form className='formularioAtualizarPerfil'>

            <div className='secaoMeuPerfil__apresentacaoPerfil'>
                <i onClick={open} >{IconObject.voltarOuCancelar}</i>
                <h1 className='apresentacaoMeuPerfil__tituloPerfil'>MEU PERFIL</h1>
                <i onClick={salvarNovosDadosPerfil}>
                   {IconObject.salvarMeuPerfil}
                </i>
            </div>

            <div>
                <img src={UsuarioFotoEditar} alt="" />
            </div>

            <div className='formularioAtualizarPerfil__atualizarNome'>
                <label>
                    NOME
                </label>
                <InputGlobal
                    placeholder={'Atualize seu nome'}
                    type={'text'}
                    onChange={setNome}
                    valueperfil={nomePerfil}
                ></InputGlobal>
            </div>

           <div className='formularioAtualizarPerfil__atualizarTag'>
            <label>
                    Tag De Usuário
                </label>
                <InputGlobal
                    placeholder={'Atualize sua tag de usuário'}
                    type={'text'}
                    onChange={setTagPerfil}
                    valueperfil={tagPerfil}
                ></InputGlobal>
           </div>

           <div className='containerInputs'>
                <div className='containerInputs__labelCidadesInput'>
                    <label>
                        Cidade
                    </label>
                    <input className='containerInputs__inputListaCidades' list='cities' placeholder='Selecione...' onChange={(e) => setCidade(e.target.value)} value={cidade} />
                    <datalist id='cities'>
                        <option value="Osasco"></option>
                        <option value="São Paulo"></option>
                    </datalist>
                </div>

                <div  className='containerInputs__labelCidadesInput'>
                    <label>
                        Estado
                    </label>
                    <input className='containerInputs__inputListaEstados' list='states' placeholder='Selecione...' onChange={(e) => setEstado(e.target.value)} value={estado}/>
                    <datalist id='states'>
                        <option value="Santa Catarina"></option>
                        <option value="São Paulo"></option>
                        <option value="Rio De Janeiro"></option>
                        <option value="Rio Grande Do Sul"></option>
                        <option value="Rio Grande Do SulAAAAAAAAA"></option>
                    </datalist>
                </div>

                <div  className='containerInputs__labelBairroInput'>
                    <label>
                        Bairro
                    </label>
                    <input className='containerInputs__inputListaBairros' list='district' placeholder='Selecione...' onChange={(e) => setBairro(e.target.value)} value={bairro}/>
                    <datalist id='district'>
                        <option value="Santa Catarina"></option>
                        <option value="São Paulo"></option>
                        <option value="Rio De Janeiro"></option>
                        <option value="Rio Grande Do Sul"></option>
                        <option value="Rio Grande Do SulAAAAAAAAA"></option>
                    </datalist>
                </div>

           </div>

           <div className='formularioAtualizarPerfil__atualizarDescricao'>
                <label>
                    Descrição
                </label>
                <input className='formularioAtualizarPerfil__editarDescricao' type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
           </div>

            

        </form>
    </>
  )
}

export default FormularioEditarMeuPerfil