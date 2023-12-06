import React, { useEffect, useState } from 'react'
import { fetchBairroPorCidade } from '../ApiEndereco'
import '../styleComboBoxLocalizacao.css'

const InputBairros = ({city, id, onChange = () => {}}) => {

  const [bairros, setBairros] = useState([])
  
  useEffect(() => {
    if(city != undefined){
      fetchBairroPorCidade(city)
      .then((data) => {
          setBairros(data)
    })
    }
  }, [city])

  return (
    <>
        
    </>
  )
}

export default InputBairros