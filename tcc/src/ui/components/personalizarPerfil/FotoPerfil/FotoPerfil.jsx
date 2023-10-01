import React, { useState, useEffect } from 'react'
import "./styleFotoPerfil.css"

const FotoPerfil = ({onChange, func, imageURL}) => {

  return (
    <>
    <label className='picture' itemID='picture__input' tabIndex="0" onChange={(e) => onChange(e.target.value)}>
      <input type="file" multiple accept='image/*' id='picture__input' onChange={func}/>
        {imageURL.map(imageSrc => <img src={imageSrc} className='picture__img' />)}
    </label>
    </>
  )
}

export default FotoPerfil