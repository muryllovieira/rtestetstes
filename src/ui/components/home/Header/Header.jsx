import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../pages/home/images/Logo.png'
import './styleHeader.css'

const HeaderHome = () => {
  return (
    <header>
        
        <div className='headerLogo'>
            <Link className='linkHome__logoHome' to={"/"}>
                <img className='logoHome' src={logo} alt="Logo da marca Costuriê" />
                <h1 className='tituloHome'>COSTURIÊ</h1>
            </Link>
        </div>
    </header>
  )
}

export default HeaderHome