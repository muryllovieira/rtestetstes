import React, {useEffect, useState} from 'react'
import { fetchCidadesPorEstado } from '../ApiEndereco'
import '../styleComboBoxLocalizacao.css'

const InputCidades = ({state, id, onChange = () => {} }) => {

const [cidades, setCidades] = useState([])

  useEffect(() => {
    fetchCidadesPorEstado(state)
    .then((data) => {
        setCidades(data)
    })
  }, [state])

  return (
    <>
        
    </>
  )
}

export default InputCidades