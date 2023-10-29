import React, {useEffect, useState} from 'react'
import { fetchCidadesPorEstado } from '../ApiEndereco'
import '../styleComboBoxLocalizacao.css'

const InputCidades = ({state, onChange = () => {} }) => {

    const [cidades, setCidades] = useState([])

  useEffect(() => {
    fetchCidadesPorEstado(state)
    .then((data) => {
        setCidades(data)
    })
  }, [state])

  return (
    <>
        <select id='cities' name='city' onChange={onChange} className='inputList'>
            <option value="">Selecione uma cidade...</option>
            {
                cidades.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                ))
            }
        </select>
    </>
  )
}

export default InputCidades