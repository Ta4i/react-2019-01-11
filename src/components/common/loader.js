import React from 'react'
import { Consumer as LangConsumer } from '../../contexts/language'
import texts from '../../texts'

function Loader() {
    return (
        <h3>
            <LangConsumer>{lang => texts[lang].loading}</LangConsumer>
        </h3>
    )
}

export default Loader
