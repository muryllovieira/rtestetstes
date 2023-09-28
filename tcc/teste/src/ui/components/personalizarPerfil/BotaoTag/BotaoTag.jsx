import React from 'react'
import "./styleBotaoTag.css"
import { useState} from 'react'

function BotaoTag({text, option, setValue}) {

  const [tagAtiva, setTagAtiva] = useState(false)

  return(
      <>
          <div onClick={() => {
              setTagAtiva(!tagAtiva)
          }} className={`botaoTag ${tagAtiva ? "botaoTagAtivo" : ""}`}>
              <p>{text}</p>
          </div>
      </>
  )
}

export default BotaoTag