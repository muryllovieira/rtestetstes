import React from 'react'
import './styleInputGlobal.css'
import IconeOlhoGlobal from '../IconeOlhoGlobal/IconeOlhoGlobal'

function InputGlobal({type, placeholder, id, func}) {
  if (type == 'password'){
    return <>
      <div>
        <input onChange={func} id={id} className='inputSenhaGlobal' type={type} placeholder={placeholder}/> 
          <i> <IconeOlhoGlobal></IconeOlhoGlobal> </i>
      </div>
        
    </>
  } else {
    return <>
      <input className='inputGlobal' type={type} placeholder={placeholder}/> 
    </>
  }
}

export default InputGlobal