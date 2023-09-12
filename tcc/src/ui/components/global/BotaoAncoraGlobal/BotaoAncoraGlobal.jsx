import { Link } from "react-router-dom"

import "./styleBotaoAncoraGlobal.css"
 
const BotaoAncoraGlobal = ({titulo, url, alternado}) => {
  if (alternado) {
    return <div className="botaoAlternativo__primary">
            <Link to={url}> {titulo} </Link>
          </div>
  }

  return <div className="botaoAlternativo__default">
          <Link to={url}> {titulo} </Link>
        </div>

}


export default BotaoAncoraGlobal