import React from 'react'
import './styleInputGlobal.css'

function InputGlobal({type, placeholder}) {
  return (
    <>
        <input className='inputGlobal' type={type} placeholder={placeholder}/> 
    </>
  )
}

export default InputGlobal