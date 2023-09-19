import React from 'react'
import { useState } from 'react'
import IconObject from '../../global/IconesGlobais/iconesGlobais'


function IconeMenuBar() {

    const [aberto, setAberto] = useState(true)

    const handleIconChange = () => {
        setAberto(!aberto)
    }

  if(aberto) {
    return (
        <>
            <i onClick={handleIconChange}>{IconObject.fecharMenu}</i>
        </>
      )
  } else {
    return (
        <>
            <i onClick={handleIconChange}>{IconObject.abrirMenu}</i>
        </>
    )
  }
}

export default IconeMenuBar