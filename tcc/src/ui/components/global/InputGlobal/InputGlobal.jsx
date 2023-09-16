import React from 'react'
import './styleInputGlobal.css'
import IconeOlhoGlobal from '../IconeOlhoGlobal/IconeOlhoGlobal'
import ModalSenhaGlobal from '../ModalSenhaGlobal/ModalSenhaGlobal'
import { useState } from 'react'

function InputGlobal({type, placeholder, id, register, onChange}) {

  const [password, setPassword] = useState('');

  const [open, setOpen] = useState()

  const [errors, setErrors] = useState({
    minValueValidation: false,
    numberValidation: false,
    capitalLetterValidation: false,
    specialCharacterValidation: false,
  });

  const handlePasswordChange = (event) => {
    setOpen(!open !== open)
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

  const handleBlur = () => {
    setOpen(!open === open)
  }

  if (type == 'password', register){
    return <>
      <div>
        <input onBlur={handleBlur} onChange={handlePasswordChange} id={id} className='inputSenhaGlobal' type={type} placeholder={placeholder}/> 
          <i> <IconeOlhoGlobal></IconeOlhoGlobal> </i>
          {register && (
            
            <ModalSenhaGlobal
              isOpen={open}
              errors={errors}
              ></ModalSenhaGlobal>
              
            )
          }
      </div>

     
    </>
  } else {
    return <>
      <input className='inputGlobal' type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/> 
    </>
  }
}

export default InputGlobal