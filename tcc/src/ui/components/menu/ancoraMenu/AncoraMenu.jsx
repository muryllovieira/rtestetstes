import React from 'react'
import { Link } from 'react-router-dom'
import './styleAncoraMenu.css'


function AncoraMenu({ icon ,url, value, publicar}) {
  return (
    <>
       <div className='ancoraMenu'>
          <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i>
          <Link className='link linkHome' to={url}> {value} </Link>
       </div>
    </>
  )
}

export default AncoraMenu