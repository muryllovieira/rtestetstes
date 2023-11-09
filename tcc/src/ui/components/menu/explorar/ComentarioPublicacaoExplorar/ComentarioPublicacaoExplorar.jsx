import React, { useState, useEffect } from 'react'
import './styleComentarioPublicacaoExplorar.css'

function ComentarioPublicacaoExplorar({ fotoUsuario, nomeUsuario, mensagemComentario, idUsuarioComentario, idUsuarioAtual }) {

    const [opcoesComentario, setOpcoesComentario] = useState(false)

    return (
        <>
            <div className='comentarioPublicacaoExplorar'>

                <div className='comentarioExplorar__containerDados'>
                    <img src={fotoUsuario} alt="" className="fotoPerfilUsuario" />

                    <div className="containerDados__containerTextos">

                        <p className="nomeUsuarioComentario">{nomeUsuario}</p>

                        <p className="mensagemComentario">{mensagemComentario}</p>

                        <p className="responderComentario">Responder</p>

                    </div>
                </div>

                <div onMouseOver={
                    setOpcoesComentario(!opcoesComentario)
                } className="botaoOpcoesComentario">
                    ...

                    {
                        opcoesComentario == true ? (

                            idUsuarioAtual == idUsuarioComentario ? (
                                <div className="modalOpcoesComentario">
                                    <div onClick={
                                        () => {

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

                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ComentarioPublicacaoExplorar