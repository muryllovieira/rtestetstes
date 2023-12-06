import React, {useState, useEffect} from 'react'
import ImagemBackground from './images/imageBackground.svg'
import './styleFotoPublicacao.css'

const FotoPublicacao = ({func, imageURL, setImageURL}) => {


  return (
    <>
      <div className='imgContainer'>
        <label className={`foto__container ${imageURL.length > 0 ? "foto__containerDois" : "foto__container"}`} itemID='foto__input' tabIndex='0'>
            <input className='inputImg' type="file" multiple accept='image/*' id='foto__input' onChange={func}/>
          
        </label>

        <div className='listImgs'>
            {
                imageURL.map((imageSrc, indice) => {
                  return (
                    <div key={indice} className='containerCardImagem' onClick={() => {
                    
                      const letImage = [...imageURL]
                      letImage.splice(indice, 1)
                      setImageURL(letImage)
                    

                    }}>
                      <div className='cardImagem'></div>
                      <div className='fundoTransparente'></div>
                      <img src={imageSrc} className='imgSelecionada' />
                    </div>
                  )
                })
            }
        </div>
        
      </div>
    </>
  )
}

export default FotoPublicacao