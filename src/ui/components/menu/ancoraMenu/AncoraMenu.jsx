import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styleAncoraMenu.css'


function AncoraMenu({ icon ,url, value, publicar, troca, config, onClick}) {

  const location = useLocation()

 if (troca) {
  return (
    <>
       <div onClick={(e) => onClick(e.target.value)} className='ancoraMenu'>
          <Link className='link linkHome' to={url}> 
            <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i>
          </Link>
       </div>
    </>
  )
 } else if (publicar == true) {

  return (
    <>
       <div className='ancoraMenu'>
          <Link className='link linkHome' to={url} state={{ background: location}}> 
            <i className={`default ${publicar ? "publicarIcone" : ""}`}>{icon}</i>
              {value}
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
       <div onClick={(e) => onClick(e.target.value)} className='ancoraMenu'>
          
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