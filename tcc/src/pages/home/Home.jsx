
//import { Outlet } from 'react-router-dom'
import BotaoAlternativo from "../../ui/components/home/BotaoAlternativo/BotaoAlternativo"

function Home() {
 
  return (
    <div className="App">

      <BotaoAlternativo 
        titulo={'REGISTRAR'}
        url={'/login'}
        alternado={true}
      ></BotaoAlternativo>

      <BotaoAlternativo 
        titulo={'LOGIN'}
        url={'/login'}
        alternado={false}
      ></BotaoAlternativo>

    </div> 
  )
}

export default Home
