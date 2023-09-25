import React from 'react'
import './styleFormularioEditarMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import UsuarioFotoEditar from '../../../../../pages/menu/menu/perfil/images/usuarioFotoEditar.svg'

function FormularioEditarMeuPerfil({open}) {

    const salvarNovosDadosPerfil = () => {

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
                ></InputGlobal>
            </div>

           <div className='formularioAtualizarPerfil__atualizarTag'>
            <label>
                    Tag De Usuário
                </label>
                <InputGlobal
                    placeholder={'Atualize sua tag de usuário'}
                    type={'text'}
                ></InputGlobal>
           </div>

           <div className='containerInputs'>
                <div className='containerInputs__labelCidadesInput'>
                    <label>
                        Cidade
                    </label>
                    <input className='containerInputs__inputListaCidades' list='cities' placeholder='Selecione...' />
                    <datalist id='cities'>
                        <option value="Osasco"></option>
                        <option value="São Paulo"></option>
                    </datalist>
                </div>

                <div  className='containerInputs__labelCidadesInput'>
                    <label>
                        Estado
                    </label>
                    <input className='containerInputs__inputListaEstados' list='states' placeholder='Selecione...'/>
                    <datalist id='states'>
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
                <input className='formularioAtualizarPerfil__editarDescricao' type="text" />
           </div>

            

        </form>
    </>
  )
}

export default FormularioEditarMeuPerfil