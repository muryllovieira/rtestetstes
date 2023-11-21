import React from 'react'
import './styleModalCarregarGlobal.css'
import Loading from './images/loading.gif'
import IconObject from '../IconesGlobais/iconesGlobais'

function ModalCarregarGlobal({ visivel, setVisivel, erro, caminho }) {

    if (visivel === true) {
        return (
            <>

                <div className='modalFundoGlobal'></div>

                <div className='modalCarregarGlobal'>
                    {
                        erro == 404 ? (

                            <p className='tess'> erro 404 </p>

                        ) : erro == 401 ? (

                            <div className='modalCarregarGlobal__mensagemGlobal'>

                                <div className='iconeFecharMensagemGlobal'>
                                    <i onClick={() => {
                                        setVisivel(!visivel)
                                    }}>{IconObject.voltarOuCancelarColorido}</i>
                                </div>

                                <p className='tess'> erro 401 </p>

                            </div>

                        ) : erro == 203 ? (

                            <div>

                                <p className='tess'> certo 203 </p>
                                <button className='tess'>Sair</button>

                            </div>

                        ) : erro == 200 ? (

                            <div>

                                <p className='tess'> certo 200 </p>
                                <button className='tess'>Sair</button>

                            </div>

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