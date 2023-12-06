import React from 'react'
import { Outlet } from "react-router-dom"
import "./styleMenu.css"
import MenuBarGlobal from '../../ui/components/global/MenuBarGlobal/MenuBarGlobal'

function Menu() {
  return (
    <>
        <div className='containerMenu'>
            <MenuBarGlobal></MenuBarGlobal>
            <Outlet/>
        </div>
        
    </>
  )
}

export default Menu