import React from 'react'
import './styleFormularioRegistrar.css'
import InputGlobal from '../../global/InputGlobal/InputGlobal'
import BotaoFormularioGlobal from '../../global/BotaoFormularioGlobal/BotaoFormularioGlobal'
import BotaoAncoraGlobal from '../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import BotaoRegistrarGoogle from '../BotaoRegistrarGoogle/BotaoRegistrarGoogle'
import ModalSenhaGlobal from '../../global/ModalSenhaGlobal/ModalSenhaGlobal'
import { useState } from 'react'
import { useRef } from 'react'


function FormularioRegistrar() {

  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false,
  });

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    setErrors({
      minValueValidation: password.length >= 8,
      numberValidation: /\d/.test(password),
      capitalLetterValidation: /[A-Z]/.test(password),
      specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
    });
  };
  

  return (
    <div className='formularioRegistrar'>
      <h1>REGISTRAR</h1>

      <div className='formularioRegistrar__containerInputs'>

        <InputGlobal
         type={'text'}
         placeholder={'Email'}
        ></InputGlobal>

      
        <InputGlobal
          func={handlePasswordChange}
          id={'inputRegistrarSenha'}
          type={'password'}
          placeholder={'Senha'}
        ></InputGlobal>

        <div className="test">
          {Object.entries(errors).map(([key, value]) => (
            <div key={key} >
              {value ? (
                <p className='verde' />
              ) : (
                <p className='vermelho' />
              )}
              <p className={`preto ${value ? 'verde' : 'vermelho'}`}>
                {key === 'minValueValidation' && 'Password must be at least 8 Characters'}
                {key === 'numberValidation' && 'Password must have at least one Number'}
                {key === 'capitalLetterValidation' && 'Password must have at least one Capital Letter'}
                {key === 'specialCharacterValidation' && 'Password must have at least one Special Character'}
              </p>
            </div>
          ))}
        </div>
        
       

        <InputGlobal
          id={'inputRegistrarSenhaDois'}
          type={'password'}
          placeholder={'Repita a senha'}
        ></InputGlobal>

        <InputGlobal
          type={'text'}
          placeholder={'Digite um nome de usuário'}
        ></InputGlobal>

      </div>

      <BotaoFormularioGlobal
        value={'REGISTRAR'}
      ></BotaoFormularioGlobal>

      <div className='formularioRegistrar__separacaoOu'>
        <div className='separacaoOu__linhaPreta'></div>
        <span>Or</span>
        <div className='separacaoOu__linhaPreta'></div>
      </div>

      <BotaoRegistrarGoogle></BotaoRegistrarGoogle>

      <BotaoAncoraGlobal
        titulo={'LOGIN'}
        url={'/login'}
        alternado={false}
      ></BotaoAncoraGlobal>
      
      <ModalSenhaGlobal isOpen = {open}></ModalSenhaGlobal>

      <div>

      </div>

    </div>
  )
}

export default FormularioRegistrar