import { Link } from "react-router-dom"
 
const BotaoDesfoque = ({titulo, url, icon}) => {

  return (
    <div>
       <Link to={url}> 
        {titulo}
        <img src={icon} alt="" />
       </Link>
    </div>
  )
}

export default BotaoDesfoque