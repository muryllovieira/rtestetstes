import React from 'react'
import "./styleBotaoTag.css"
import { useState} from 'react'

function BotaoTag({text, option, setValue, array}) {


    const [tagAtiva, setTagAtiva] = useState(false)

    const valueTag = () => {
        if(tagAtiva == true) {
            return true
        } else {
            return false
        }
    }

    const setTag = () => {
        setTagAtiva(!tagAtiva)
        option(tagAtiva)
        valueTag()
    }

  return(
      <>
          <div onClick={() => {
              setTag()
          }} className={`botaoTag ${tagAtiva ? "botaoTagAtivo" : ""}`}>
              <p>{text}</p>
          </div>
      </>
  )
}

export default BotaoTag