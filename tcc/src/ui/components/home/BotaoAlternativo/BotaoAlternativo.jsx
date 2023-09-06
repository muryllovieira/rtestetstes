import { Link } from "react-router-dom"

import "./styleBotaoAlternativo.css"
 
const BotaoAlternativo = ({titulo, url, alternado}) => {

  if (alternado) {
    return <div className="botaoAlternativo__primary">
            <Link to={url}> {titulo} </Link>
          </div>
  }

  return <div className="botaoAlternativo__default">
          <Link to={url}> {titulo} </Link>
        </div>

}

export default BotaoAlternativo 