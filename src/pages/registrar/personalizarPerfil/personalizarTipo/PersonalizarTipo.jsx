import React from 'react'
import BotaoTipoPerfil from '../../../../ui/components/personalizarPerfil/BotaoTipoPerfil/BotaoTipoPerfil'
import IconObject from '../../../../ui/components/global/IconesGlobais/IconesGlobais'
import './stylePersonalizarTipo.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PersonalizarTipo() {

    const navigate = useNavigate()

    const [ consumidorAtivo, setConsumidorAtivo] = useState(false)
    const [ costureiraAtivo, setCostureiraAtivo] = useState(false)

    const consumidorAtivoFunc = () => {
        if (consumidorAtivo) {
            return true
        } else {
            return false
        }
    }

    const costureiraAtivoFunc = () => {
        if (costureiraAtivo) {
            return true
        } else {
            return false
        }
    }

    const redirecionarPagina = () => {
        const paginaConsumidor = consumidorAtivoFunc()

        const paginaCostureira = costureiraAtivoFunc()

        if(paginaCostureira == true && paginaConsumidor == false) {
            navigate("/personalizar-perfil/personalizar-tags")
        } else if (paginaCostureira == false && paginaConsumidor == true) {
            navigate("/menu/explorar")
        }
    }

  return (
    <>

        <div className="containerPersonalizarTipo">
            <div className="containerPersonalizarTipo__escolhaTipo">

                <div className='escolhaTipo__escolhaVoltarContinuar'>
                    <i onClick={() => {
                        navigate('/personalizar-perfil/personalizar-localizacao')
                    }}>{IconObject.voltarOuCancelarColorido}</i>
                    <i onClick={redirecionarPagina}>{IconObject.avancarTipoPerfil}</i>
                </div>

               <div className='escolhaTipo__botoesPerfil'>
                    <BotaoTipoPerfil
                        setValue={() => {
                            setConsumidorAtivo(!consumidorAtivo)
                            if(costureiraAtivo) {
                                setCostureiraAtivo(!costureiraAtivo)
                            }
                        }}
                        option={consumidorAtivoFunc()}
                        icon={IconObject.perfilCostureira}
                        text={'PERFIL DE CONSUMIDOR'}
                    ></BotaoTipoPerfil>

                    <BotaoTipoPerfil
                        setValue={() => {
                            setCostureiraAtivo(!costureiraAtivo)
                            if(consumidorAtivo) {
                                setConsumidorAtivo(!consumidorAtivo)
                            }
                        }}
                        option={costureiraAtivoFunc()}
                        icon={IconObject.novelo}
                        text={'PERFIL DE COSTUREIRA'}
                    ></BotaoTipoPerfil>
               </div>

            </div>
        </div>
    
    </>
  )
}

export default PersonalizarTipo