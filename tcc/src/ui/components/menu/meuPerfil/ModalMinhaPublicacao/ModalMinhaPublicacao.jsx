import React, { useState } from 'react'
import './styleModalMinhaPublicacao.css'
import './product-image-slider.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Controller, Virtual } from 'swiper/modules'
import { register } from 'swiper/element/bundle'
import { useNavigate } from 'react-router-dom'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import BotaoAncoraGlobal from '../../../global/BotaoAncoraGlobal/BotaoAncoraGlobal'
import ImagemPerfil from './images/imagemPerfil.png'
import IconeMais from './images/icone_mais.svg'
import Enviar from './images/enviar.svg'
import Fechar from './images/fechar.svg'
<<<<<<< HEAD
import { useState } from 'react'
=======
import ModalMenu from '../ModalMinhaPublicacao/modalMenu/ModalMenu.jsx'
>>>>>>> 963348f7d4920ffeb43e5a29b3f6124acd6b0fea

register()

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
<<<<<<< HEAD
import { useEffect } from 'react'


const ModalMinhaPublicacao = ({ isOpen }) => {

  const navigate = useNavigate()

  const swiper = useSwiper()

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  useEffect(() => {
    console.log(firstSwiper)
  }, [firstSwiper])

  const [opcoes, setOpcoes] = useState(false)
  const [value, setValue] = useState(0)

  const setListLenght = () => {

    if (data.length >= 4) {
      setValue(4)
    } else {
      setValue(data.length)
    }
  }

  const data = [
    { id: '1', image: 'https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image' },
    { id: '2', image: 'https://imagepng.org/wp-content/uploads/2017/10/batman-simbolo.png' },
    { id: '3', image: 'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg' },
    { id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg' },
    { id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg' },
    { id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg' },
    { id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg' },
  ]

  useEffect(() => {
    setListLenght()
  }, [value])

  if (isOpen) {
    return (
      <>
        <div className='modal__background'>
          <div className='formularioMinhaPublicacao'>

            <div className='setor_01'>

              <div className='setor01_header'>
                <img src={Fechar} alt="Voltar" className='setaVoltar' onClick={() => {
                  navigate(-1)
                }} />
              </div>

              <div className='setor01_main'>
                <Swiper
                  slidesPerView={1}
                  navigation
                  virtual
                  modules={[Controller, Virtual]}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                >
                  {data.map((item, index) => (
                    <SwiperSlide
                      key={item}
                      className='slide_post'
                      virtualIndex={index}

                    >
                      <img src={item.image} alt="" className='slide_item' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className='lista_imagens'>
                <Swiper
                  slidesPerView={value}
                  modules={[Controller, Virtual]}
                  onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper }}
                  virtual
                >
                  {data.map((item, index) => (
                    <SwiperSlide
                      key={item}
                      virtualIndex={index}
                    

                    >
                      <img src={item.image} alt="" className='thumb_item' />
                    </SwiperSlide>
                  ))}
                </Swiper>
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
                    <img src={ImagemPerfil} className='foto_perfil' />
                    <p className='nome_perfil'>Beltrana dos santos</p>
                  </div>

                  <div className='menu'>
                    <img onClick={() => {
                      setOpcoes(!opcoes)
                    }} src={IconeMais} className='botao_mais' />
                    {
                      opcoes == false ? (
                        null
                      ) : (
                        <p className='teste'>
                          asoidjaij
                        </p>
                      )
                    }
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
                    <img src={ImagemPerfil} alt="" className='foto_perfil' />
                    <div className='container_textos'>
                      <p className='nome'>Mayara</p>
                      <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                      <p className='responder'>Responder</p>
                    </div>
                  </div>
                  <div className='card_comentario'>
                    <img src={ImagemPerfil} alt="" className='foto_perfil' />
                    <div className='container_textos'>
                      <p className='nome'>Mayara</p>
                      <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                      <p className='responder'>Responder</p>
                    </div>
                  </div>
                  <div className='card_comentario'>
                    <img src={ImagemPerfil} alt="" className='foto_perfil' />
                    <div className='container_textos'>
                      <p className='nome'>Mayara</p>
                      <p className='texto_comentario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni neque beatae magnam, quia ab labore nihil itaque repellendus aut cum reprehenderit distinctio cupiditate velit voluptate dolor exercitationem cumque aliquid.</p>
                      <p className='responder'>Responder</p>
                    </div>
                  </div>
                  <div className='card_comentario'>
                    <img src={ImagemPerfil} alt="" className='foto_perfil' />
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
=======

const ModalMinhaPublicacao = ({isOpen}) => {

  const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    const data = [
        {id: '1', image: 'https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image'},
        {id: '2', image: 'https://imagepng.org/wp-content/uploads/2017/10/batman-simbolo.png'},
        {id: '3', image: 'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},
        {id: '4', image: 'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg'},

      ]

if (isOpen) {
    return(
        <>
<div className='modal__background'>
  <div className='formularioMinhaPublicacao'>

    <div className='setor_01'>

      <div className='setor01_header'>
        <img src={Fechar} alt="Voltar" className='setaVoltar' onClick={() => {
          navigate(-1)
        }}/>
      </div>
    
      <div className='setor01_main'>
          <Swiper
            slidesPerView={1}
            navigation
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className='slide_post'>
                <img src={item.image} alt="" className='slide_item'/>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

    <div className='lista_imagens'>
          <Swiper
            slidesPerView={4}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} >
                <img src={item.image} alt="" className='thumb_item'/>
              </SwiperSlide>
            ))}
          </Swiper>
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
          <img src={IconeMais} className='botao_mais' onClick={() => setOpenModal(true)} />
          <ModalMenu isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
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
>>>>>>> 963348f7d4920ffeb43e5a29b3f6124acd6b0fea
          </div>
        </div>
      </>
    )
  } else {
    null
  }
}

export default ModalMinhaPublicacao