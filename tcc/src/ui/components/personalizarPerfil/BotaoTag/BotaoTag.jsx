import React from 'react'
import "./styleBotaoTag.css"
import { useState} from 'react'

function BotaoTag({onClick, text, option, estado}) {


    const [tagAtiva, setTagAtiva] = useState(false)

    const valueTag = () => {
        if(tagAtiva == true) {
            return true
        } else {
            return false
        }
    }

    const setTag = () => {
        option(tagAtiva)
        valueTag()
        setTagAtiva(!tagAtiva)
    }

    if (estado) {
        return(
            <>
                <div onClick={() => {
                    setTag()
                }} className={"botaoTagAtivo"}>
                    <p>{text}</p>
                </div>

                
            </>
        )
    } else if (tagAtiva == false) {
        return(
            <>
              <div onClick={() => {
                    setTag()
                }} className={"botaoTag"}>
                    <p>{text}</p>
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default BotaoTag