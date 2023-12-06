import React, { useState, useEffect } from 'react'
import './styleComentarioPublicacaoExplorar.css'
import blogFetch from '../../../../../data/services/api/ApiService'

function ComentarioPublicacaoExplorar({ pegarComentarios, accessToken, fotoUsuario, nomeUsuario, mensagemComentario, idUsuarioComentario, idUsuarioAtual, idComentario }) {

    const [opcoesComentario, setOpcoesComentario] = useState(false)

    const [verMais, setVerMais] = useState(false)

    console.log(idComentario)

    const apagarComentario = async () => {
        try {
            const response = await blogFetch.delete(`/comentario/${idComentario}`, {
                headers: {
                    'x-access-token': accessToken
                }
            })

            pegarComentarios()

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={`comentarioPublicacaoExplorar ${verMais == true ? 'comentarioPublicacaoExplorarExpandido' : 'comentarioPublicacaoExplorar'}`}>

                <div className='comentarioExplorar__containerDados'>
                    <img src={fotoUsuario} alt="" className="fotoPerfilUsuario" />

                    <div className="containerDados__containerTextosExplorar">


                        <p className="nomeUsuarioComentario">{nomeUsuario}</p>

                        {

                            mensagemComentario.length < 50 ? (

                                <p className='mensagemComentario'>{mensagemComentario}</p>

                            ) : (

                                mensagemComentario.length > 50 ? (

                                    // console.log({
                                    //     tes: `S${mensagemComentario.slice(0, 50)}`
                                    // })


                                    verMais == false ? (

                                        <p className="mensagemComentarioReduzido">{mensagemComentario.slice(0, 50)} <b onClick={() => {
                                            setVerMais(!verMais)
                                        }} className='botaoVerMaisComentarioExplorar'> ver mais</b> </p>

                                    ) : (

                                        <p className="mensagemComentario">{mensagemComentario} <b onClick={() => {
                                            setVerMais(!verMais)
                                        }} className='botaoVerMenosComentarioExplorar'> ver menos</b></p>
                                    )

                                ) : (

                                    <p className="mensagemComentario">{mensagemComentario} </p>


                                )

                            )

                        }


                        <p className="responderComentario">Responder</p>

                    </div>
                </div>

                <div onClick={() => {
                    setOpcoesComentario(!opcoesComentario)
                }} className={`botaoOpcoesComentario ${opcoesComentario == true ? 'botaoOpcoesComentarioShow' : 'botaoOpcoesComentario'}`}>
                    ...
                </div>

                {
                    opcoesComentario == true ? (

                        <div>

                            <div className='tes' onClick={() => {
                                setOpcoesComentario(!opcoesComentario)
                            }}></div>

                            {
                                idUsuarioAtual == idUsuarioComentario ? (
                                    <div className="modalOpcoesComentario">
                                        <div onClick={
                                            () => {
                                                apagarComentario()
                                            }
                                        } className='opcaoExcluirComentario'>

                                            <p className='textoExcluirComentario'>
                                                Apagar comentário
                                            </p>

                                        </div>

                                        <div onClick={() => {

                                        }} className='opcaoEditarComentario'>

                                            <p className='textoEditarComentario'>
                                                Editar comentário
                                            </p>

                                        </div>

                                    </div>
                                ) : (
                                    <div className="modalOpcoesComentario">
                                        <div onClick={
                                            () => {

                                            }
                                        } className='opcaoDenunciarComentario'>

                                            <p className='textoDenunciarComentario'>
                                                Denunciar comentário
                                            </p>

                                        </div>



                                    </div>
                                )
                            }
                        </div>

                    ) : (
                        null
                    )
                }
            </div>
        </>
    )
}

export default ComentarioPublicacaoExplorar