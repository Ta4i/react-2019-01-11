import React from 'react'
import { Consumer as LangConsumer } from '../../contexts/language'

function Loader() {
    return (
        <h3>
            <LangConsumer>{lang => lang.loading}</LangConsumer>
        </h3>
    )
}

export default Loader
