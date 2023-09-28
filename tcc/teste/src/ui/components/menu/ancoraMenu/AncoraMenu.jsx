import React from 'react'
import { Link } from 'react-router-dom'
import './styleAncoraMenu.css'


function AncoraMenu({ icon ,url, value, publicar, troca, config}) {
 if (troca) {
  return (
    <>
       <div className='ancoraMenu'>
          <Link className='link linkHome' to={url}> 
            <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i>
          </Link>
       </div>
    </>
  )
 } else if (config) {
  return (
    <>
       <div className='ancoraMenu'>
          
          <Link className='linkConfig' to={url}> 
            <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i> 
              {value} 
            </Link>
       </div>
    </>
  )
 } else {
  return (
    <>
       <div className='ancoraMenu'>
          
          <Link className='link linkHome' to={url}> 
            <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i> 
              {value} 
            </Link>
       </div>
    </>
  )
 }
}

export default AncoraMenu