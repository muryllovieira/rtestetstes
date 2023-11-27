import React from 'react'
import './styleModalCarregarGlobal.css'
import Loading from './images/loading.gif'
import IconObject from '../IconesGlobais/iconesGlobais'

function ModalCarregarGlobal({ visivel, setVisivel, erro, caminho, open, setOpen, mensagem }) {

    if (visivel === true) {
        return (
            <>

                <div className='modalFundoGlobal'></div>

                <div className='modalCarregarGlobal'>
                    {
                        erro == 404 ? (

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

                            )

                        ) : erro == 401 ? (

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

                            )

                        ) : erro == 200 ? (

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