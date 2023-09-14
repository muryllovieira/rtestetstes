import React from 'react'
import "./styleModalSenhaGlobal.css"

function ModalSenhaGlobal({isOpen, errors}) {
    if (isOpen) {
        return (
            <div className='containerModalSenhaGlobal'>
              <div className="containerModalSenhaGlobal__modalSenhaGlobal">
              {Object.entries(errors).map(([key, value]) => (
                <div key={key} >
                  {value ? (
                    <p className='textoValidacaoVerde' />
                  ) : (
                    <p className='textoValidacaoVermelho' />
                  )}
                  <p className={`textoPadrao ${value ? 'textoValidacaoVerde' : 'textoValidacaoVermelho'}`}>
                    {key === 'minValueValidation' && 'A senha precisa ter ao menos 8 caracteres'}
                    {key === 'numberValidation' && 'A senha precisa ter ao menos um número'}
                    {key === 'capitalLetterValidation' && 'A senha precisa ter ao menos um letra maiúscula'}
                    {key === 'specialCharacterValidation' && 'A senha precisa ter ao menos um caractére especial (@&-.)'}
                  </p>
                </div>
              ))}
        </div>
            </div>
      )
    }
 
}

export default ModalSenhaGlobal