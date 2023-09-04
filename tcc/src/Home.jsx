import './css/Home.css'

//import { Outlet } from 'react-router-dom'

import BotaoDesfoque from './components/BotaoDesfoque'
import BotaoFoco from './components/BotaoFoco'

function Home() {
 
  return (
    <div className="App">
     
     <BotaoDesfoque
        titulo="Login"
        url={'/login'} 
        icon='./images/Frame 4 (1).png'
     ></BotaoDesfoque>

    </div> 
  )
}

export default Home
