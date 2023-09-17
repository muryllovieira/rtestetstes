import React from 'react'
import './styleInputCodigo.css'

function InputCodigo({onChange}) {
  
  return (
    <>
        <input className='inputCodigo' onChange={(e) => onChange(e.target.value)} type="number" min={0} max={9} required  />
    </>
  )
}

export default InputCodigo