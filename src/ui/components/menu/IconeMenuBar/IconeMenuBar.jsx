import React from 'react'
import IconObject from '../../global/IconesGlobais/iconesGlobais'


function IconeMenuBar({aberto, func}) {

  

  if(!aberto) {
    return (
        <>
            <i onClick={func}>{IconObject.fecharMenu}</i>
        </>
      )
  } else {
    return (
        <>
            <i onClick={func}>{IconObject.abrirMenu}</i>
        </>
    )
  }
}

export default IconeMenuBar