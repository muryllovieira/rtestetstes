import React from 'react'
import './styleFormularioPublicacao.css'
import FotoPublicacao from '../FotoPublicacao/FotoPublicacao'
import FormDescricao from '../../../personalizarPerfil/FormDescricao/formDescricao'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'

const FormularioPublicacao = () => {
  return (
      <>
        <div className='formularioPublicacao'>

            <div className='container__main'>
                <FotoPublicacao></FotoPublicacao>
                <InputGlobal
                    type={'email'}
                    placeholder={'Título'}
                    emailWeb={true}
                ></InputGlobal>
            </div>

            <div className='container__footer'>
                <FormDescricao
                    type={'descricao'}
                    placeholder={'Dígite uma descrição'}
                ></FormDescricao>
                <div className='titulo__tag'>
                    <p className='tags'>TAGS</p>
                    <div className='containerTags'></div>
                </div>
            </div>

        </div>
      </>
    
  )
}

export default FormularioPublicacao