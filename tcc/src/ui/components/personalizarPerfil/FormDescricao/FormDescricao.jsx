import React, { useState } from 'react'
import './styleFormDescricao.css'

const formDescricao = () => {

const [textarea, setTextArea] = useState()

const handleChange = (e) => {
    setTextArea(e.target.value)
}

  return (
    <>
        <form>
            <textarea className='formulario' value={textarea} onChange={handleChange}></textarea>
        </form>
    </>
  )
}

export default formDescricao