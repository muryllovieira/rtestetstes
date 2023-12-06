import React from 'react'
import './styleModalCarregarGlobal.css'
import Loading from './images/loading.gif'
import IconObject from '../IconesGlobais/IconesGlobais'
import { useNavigate } from 'react-router-dom'

function ModalCarregarGlobal({ visivel, setVisivel, erro, caminho, abrirFechar, setAbrirFechar, mensagem}) {

    const navigate = useNavigate()

    if (visivel === true) {
        return (
            <>

                <div className='modalFundoGlobal'></div>

                <div className='modalCarregarGlobal'>

                    {
                        erro == 404 ? (

                            abrirFechar ? (

                                mensagem ? (

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

                                    <p className='tess'> {mensagem}</p>

                                </div>

                                ) : (
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

                                    <p className='tess'> 404 - Não encontrado. </p>

                                </div>
                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>  404 - Não encontrado. </p>

                                </div>

                                )
                            )

                        ) : erro == 401 ? (

                            abrirFechar ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 401 - Token de acesso inválido ou acesso não autorizado. </p>

                                </div>

                                    

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 401 - Token de acesso inválido ou acesso não autorizado. </p>

                                </div>

                                )

                            )

                        ) : erro == 400 ? (

                            abrirFechar ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 400 - Dados enviados são inválidos. </p>

                                </div>
                                    
                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 400 - Dados enviados são inválidos. </p>

                                </div>

                                )

                            )

                        ) : erro == 201 ? (

                            abrirFechar ? (

                                mensagem ? (
                                    
                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 201 - Recurso criado com sucesso. </p>

                                </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 201 - Recurso criado com sucesso. </p>

                                </div>
                                    
                                )

                            )

                        ) : erro == 200 ? (

                            abrirFechar ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 200 - Requisição foi efetuada com sucesso. </p>

                                </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 200 - Requisição foi efetuada com sucesso. </p>

                                </div>

                                )

                            )

                        ) : erro == 500 ? (
                            abrirFechar ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 500 - Erro no servidor, por favor entre em contato conosco. </p>

                                </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 500 - Erro no servidor, por favor entre em contato conosco. </p>

                                </div>

                                )

                            )
                        ) : erro == 415 ? (

                            abrirFechar ? (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> {mensagem} </p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)


                                            setAbrirFechar(!abrirFechar)

                                            navigate(caminho)


                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 415 - Os formatos de dados não são suportados pelo servidor. </p>

                                </div>

                                )

                            ) : (

                                mensagem ? (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'>{mensagem}</p>

                                </div>

                                ) : (

                                    <div className='modalCarregarGlobal__mensagemGlobal'>

                                    <div className='iconeFecharMensagemGlobal'>
                                        <i onClick={() => {

                                            setVisivel(!visivel)

                                            navigate(caminho)

                                        }}>{IconObject.voltarOuCancelarColorido}</i>
                                    </div>

                                    <p className='tess'> 415 - Os formatos de dados não são suportados pelo servidor. </p>

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