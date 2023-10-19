import React, {useState, useEffect} from 'react'
import './styleFotoPublicacao.css'

const FotoPublicacao = ({onChange, func, imageURL}) => {

  return (
    <>
      <div className='foto__container'>
        <label className='fotoInput' itemID='foto__input' tabIndex='0' onChange={(e) => onChange(e.target.value)}>
            <input className='inputImg' type="file" multiple accept='image/*' id='foto__input' onChange={func}/>
          <div className='listImgs'>
            {
                imageURL.map((imageSrc) => {

                  if(imageURL.length == 1) {
                    return (
                      <img src={imageSrc} className='umaImgSelecionada' />
                    )
                  } else if (imageURL.length >= 5) {
                    return (
                        <img src={imageSrc} className='listaTamanhoCincoImgSelecionadas' />
                    )
                  } else {
                    return (
                      <img src={imageSrc} className='listaImgSelecionadas' />
                    )
                  }

                })
                }
        </div>
        </label>

        
      </div>
    </>
  )
}

export default FotoPublicacao