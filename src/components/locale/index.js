import React from 'react'
import { Consumer as InternationalizationConsumer } from '../../contexts/internationalization'
import content from '../../content/lang'

function localize(key) {
    return (
        <InternationalizationConsumer>
            {(contextValue) => content[contextValue.lang][key]}
        </InternationalizationConsumer>
    )
}

export default localize