import React from 'react'
import './styleTagGlobal.css'

function TagGlobal({ id, value, numero, verMais, setModalTags, modalTags}) {
  return (
    <>

      {
        verMais ? (

          <div className='tagGlobalBotaoVerMais' onClick={() => {
            setModalTags(!modalTags)
          }}>
            <span>
              {value}
            </span>
          </div>

        ) : (

          <div className='tagGlobal'>
            <span>
              {value}
            </span>

            <p className='tagGlobal__numeroRecomendacao'>
              {numero}
            </p>
          </div>

        )
      }

    </>
  )
}

export default TagGlobal