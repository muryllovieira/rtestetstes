import React, { useState } from 'react'
import "./styleComboBoxLocalizacao.css"

const ComboBoxLocalizacao = () => {


  return (
    <div className='comboBoxContainer'>

        <div className='comboBox'>
            <p className='text'>Estados:</p>
            <input className='inputList' list='states' placeholder='Selecione um Estado'/>
            <datalist id='states'>
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
                <option>Bahia</option>
            </datalist>
        </div>
        

        <div className='comboBox'>
            <p className='text'>Cidades:</p>
            <input className='inputList' list='cities' placeholder='Selecione uma Cidade'/>
            <datalist id='cities'>
                <option>Osasco</option>
                <option>Barueri</option>
                <option>Itapevi</option>
            </datalist>
        </div>
        

        <div className='comboBox'>
            <p className='text'>Bairros:</p>
            <input className='inputList' list='bairros' placeholder='Selecione um Bairro'/>
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