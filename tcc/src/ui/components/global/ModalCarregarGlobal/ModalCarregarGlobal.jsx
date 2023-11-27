import React from 'react'
import './styleModalCarregarGlobal.css'
import Loading from './images/loading.gif'
import IconObject from '../IconesGlobais/iconesGlobais'
import { useNavigate } from 'react-router-dom' 

<<<<<<< HEAD
function ModalCarregarGlobal({ visivel, setVisivel, erro, caminho, open, setOpen, mensagem }) {
=======
function ModalCarregarGlobal({ visivel, setVisivel, erro, caminho, abrirFechar, setAbrirFechar }) {

    const navigate = useNavigate()
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798

    if (visivel === true) {
        return (
            <>

                <div className='modalFundoGlobal'></div>

                <div className='modalCarregarGlobal'>
                    {
                        erro == 404 ? (

<<<<<<< HEAD
                            open ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'>{mensagem}</p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 404 </p>

                                    </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 404 </p>

                                    </div>

                                )

=======
                            abrirFechar ? (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            if (abrirFechar == false) {
                                                setAbrirFechar(!abrirFechar)
                                            }

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 404 </p>

                                </div>

                            ) : (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)
                                            
                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 404 </p>

                                </div>
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798
                            )

                        ) : erro == 401 ? (

<<<<<<< HEAD
                            open ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>
=======
                            abrirFechar ? (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 401 </p>

                                </div>

                            ) : (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 401 </p>

                                </div>

                            )

                        ) : erro == 400 ? (

                            abrirFechar ? (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 400 </p>

                                </div>

                            ) : (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> erro 400 </p>

                                </div>

                            )
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798

                                        <p className='tess'> {mensagem} </p>

<<<<<<< HEAD
                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 401 </p>

                                    </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 401 </p>

                                    </div>

                                )

                            )

                        ) : erro == 201 ? (

                            open ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 201 </p>

                                    </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 201 </p>

                                    </div>

                                )
=======
                            abrirFechar ? (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 203 </p>

                                </div>

                            ) : (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)



                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 203 </p>

                                </div>
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798

                            )

                        ) : erro == 200 ? (

<<<<<<< HEAD
                            open ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                                setOpen(!open)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 200 </p>

                                    </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> {mensagem} </p>

                                    </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                        <div className='iconeFecharMensagemGlobal'>
                                            <i onClick={() => {
                                                setVisivel(!visivel)
                                            }}>{IconObject.voltarOuCancelarColorido}</i>
                                        </div>

                                        <p className='tess'> erro 200 </p>

                                    </div>

                                )
=======
                            abrirFechar ? (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 200 </p>

                                </div>

                            ) : (

                                <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 200 </p>

                                </div>
>>>>>>> 6045d12fdc2811632f7cd58fce4a94f8de47f798

                            )

                        ) : (

                            <div className='containerCarregando'>

                                <img className='containerCarregando__imagemCarregando' src={Loading} alt="" />

                            </div>

                        )
                    }
                </div>


            </>
        )
    } else {
        return (
            null
        )
    }

}

export default ModalCarregarGlobal