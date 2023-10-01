import React, { useContext, useState, useEffect } from 'react'
import "./styleComboBoxLocalizacao.css"
import UserContext from '../../../../data/hooks/context/UserContext'

const ComboBoxLocalizacao = ({onChange}) => {

  const { estado, setEstado } = useContext(UserContext)
  const { cidade, setCidade } = useContext(UserContext)
  const { bairro, setBairro } = useContext(UserContext)


  return (
    <div className='comboBoxContainer' >

        <div className='comboBox'>

            <p className='text'>Estados:</p>

            <input  onChange={(e) => setEstado(e.target.value)} className='inputList' list='states' placeholder='Selecione um Estado'/>
            <datalist id='states'>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Bahia</option>
            </datalist>

        </div>
        

        <div className='comboBox'>
            
            <p className='text'>Cidades:</p>

            <input onChange={(e) => setCidade(e.target.value)} className='inputList' list='cities' placeholder='Selecione uma Cidade'/>
            <datalist id='cities'>
                <option>Osasco</option>
                <option>Barueri</option>
                <option>Itapevi</option>
            </datalist>

        </div>
        

        <div className='comboBox'>
            
            <p className='text'>Bairros:</p>

            <input onChange={(e) => setBairro(e.target.value)}  className='inputList' list='bairros' placeholder='Selecione um Bairro'/>
            <datalist id='bairros'>
                <option>Vale do Sol</option>
                <option>Jardim Rosemary</option>
                <option>Antonio João</option>
            </datalist>

        </div>
        
    </div>
  )
}

export default ComboBoxLocalizacao