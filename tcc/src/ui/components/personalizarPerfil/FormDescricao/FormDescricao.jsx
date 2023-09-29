import React, { useState } from 'react'
import './styleFormDescricao.css'

const formDescricao = ({onChange}) => {

const [textarea, setTextArea] = useState()

const handleChange = (e) => {
  
}

  return (
    <>
        <form>
            <textarea className='formulario' value={textarea} onChange={(e) => onChange(e.target.value)}></textarea>
        </form>
    </>
  )
}

export default formDescricao