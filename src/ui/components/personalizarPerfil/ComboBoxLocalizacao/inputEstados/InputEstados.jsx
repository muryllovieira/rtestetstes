import React, {useEffect, useState} from 'react'
import { fetchEstados } from '../ApiEndereco'
import '../styleComboBoxLocalizacao.css'

const InputEstados = ({id, onChange = () => {}}) => {

  const [estados, setEstados] = useState([])

  useEffect(() => {
    fetchEstados()
    .then((data) => {setEstados(data)})
  }, [])

  return (
      <>
        
      </>
  )
}

export default InputEstados