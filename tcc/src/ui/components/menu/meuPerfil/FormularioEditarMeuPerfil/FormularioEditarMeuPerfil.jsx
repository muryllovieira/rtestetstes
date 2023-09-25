import React from 'react'
import './styleFormularioEditarMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'

function FormularioEditarMeuPerfil({open}) {
  return (
    <>
       

        <form onSubmit={(e) => {
            e.preventDefault()
            console.log("oi")
        }}>

            <div className='secaoMeuPerfil__apresentacaoPerfil'>
                <i onClick={open} >{IconObject.editarMeuPerfil}</i>
                <h1 className='apresentacaoMeuPerfil__tituloPerfil'>MEU PERFIL</h1>
                <i>
                    <InputGlobal
                        type={'submit'}
                    ></InputGlobal>
                </i>
            </div>

            <div>
                <img src="" alt="" />
            </div>

            <label>
                NOME
            </label>
            <InputGlobal
                placeholder={'Atualize seu nome'}
                type={'text'}
            ></InputGlobal>

            <label>
                Tag De Usuário
            </label>
            <InputGlobal
                placeholder={'Atualize sua tag de usuário'}
                type={'text'}
            ></InputGlobal>

            <label>
                Descrição
            </label>
            <InputGlobal
                placeholder={'Atualize sua descrição'}
                type={'text'}
            ></InputGlobal>

        </form>
    </>
  )
}

export default FormularioEditarMeuPerfil