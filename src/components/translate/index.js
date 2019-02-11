import React from 'react'
import { Consumer as LangConsumer } from '../../contexts/lang'
import texts from '../../texts'

function Translate({children}) {
    return (
          <LangConsumer>
            {(contextValue) => texts[contextValue.currentLang][children] }
          </LangConsumer>
    )
}

export default Translate
