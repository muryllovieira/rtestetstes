import React from 'react'
import './styleFormularioMinhaPublicacao.css'
import './product-image-slider.scss'
import voltar from './images/voltar.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import BotaoAncoraGlobal from '../../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import ImagemPerfil from './images/imagemPerfil.png'
import IconeMais from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'

const FormularioMinhaPublicacao = () => {

  const data = [
    {id: '1', image: 'https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image'},
    {id: '2', image: 'https://imagepng.org/wp-content/uploads/2017/10/batman-simbolo.png'},
    {id: '3', image: 'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'},
    {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'}
  ]

  return (
    <>
        <div className='formularioMinhaPublicacao'>

            <div className='setor_01'>

                <div className='setor01_header'>
                  <img src={voltar} alt="Voltar" className='setaVoltar'/>
                </div>
                
            <div className='setor01_main'>
                <Swiper
                    slidesPerView={1}
                    navigation
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id}  >
                        <img src={item.image} alt="Slider" className='slide_item'/>
                      </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className='lista_imagens'>
                {data.map((item) => (
                    <img src={item.image} key={item.id} className='item_image'/>
                ))}
            </div>
                 
            <div className='setor01_footer'>
                <BotaoAncoraGlobal
                titulo={'Dar Ponto'}
                ></BotaoAncoraGlobal>

                <BotaoAncoraGlobal
                titulo={'Responder'}
                ></BotaoAncoraGlobal>
            </div>
          </div>
            
            <div className='setor_02'>
                
              <div className="setor02_header">
                <div className="card">

                  <div className='perfil_container'>
                    <img src={ImagemPerfil} className='foto_perfil'/>
                    <p className='nome_perfil'>Beltrana dos santos</p>
                  </div>

                  <div className='menu'>
                    <img src={IconeMais} className='botao_mais' />
                  </div>

                </div>
              </div>

              <div className='setor02_main'>

                <div className='titulo_descricao'>
                    <h1 className='titulo'>Titulo</h1>
                    <p className='descricao'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, architecto iure? Hic iste iusto maiores accusantium esse ipsa, molestiae libero blanditiis! Consectetur voluptatibus excepturi accusantium odio ducimus laborum assumenda dignissimos.</p>
                </div>

                <div className='lista_comentarios'>

                    <div className='card_comentario'>
                      <img src={ImagemPerfil} alt="" className='foto_perfil'/>
                      <div className='container_textos'>
                        <p className='nome'>Mayara</p>
                        <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                        <p className='responder'>Responder</p>
                      </div>
                    </div>
                    
                    
                    
                    


                </div>
              </div>  

              <div className='setor02_footer'>
                  <InputGlobal
                    type={'email'}
                    emailWeb={true}
                    placeholder={'Escreva um comentário...'}
                  ></InputGlobal>
                  <img src={Enviar} alt="" />
              </div>
              
            </div>
        </div>
    </>
  )
}

export default FormularioMinhaPublicacao