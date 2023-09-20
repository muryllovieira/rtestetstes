import React from 'react'
import './styleTagGlobal.css'

function TagGlobal({value,numero}) {
  return (
    <> 

        <div  className='tagGlobal'>
            <span>
                {value}
            </span>
            
            <p className='tagGlobal__numeroRecomendacao'>
                {numero}
            </p>
        </div>
       
    </>
  )
}

export default TagGlobal