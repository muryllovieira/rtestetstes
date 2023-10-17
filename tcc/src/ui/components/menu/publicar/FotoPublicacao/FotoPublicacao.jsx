import React from 'react'
import './styleFotoPublicacao.css'

const FotoPublicacao = ({onChange, func, imageURL}) => {
  return (
    <>
                <label className='foto__container' itemID='foto__input' tabIndex='0' onChange={(e) => onChange(e.target.value)}>
                    <input type="file" multiple accept='image/*' id='foto__input' onChange={func}/>
                </label>
    </>
  )
}

export default FotoPublicacao