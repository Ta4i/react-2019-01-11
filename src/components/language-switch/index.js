import React from 'react'
import texts from '../../texts'
import enIcon from './en.png'
import ruIcon from './ru.png'

const icons = new Map()
icons.set('en', enIcon)
icons.set('ru', ruIcon)

function LanguageSwitch(props) {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        image: {
            height: '1em',
            marginRight: '5px'
        }
    }
    const options = Object.entries(texts).map(([abbr, values]) => {
        return <option key={abbr} value={abbr}>{values.language}</option>
    })
    return (
        <div style={styles.container}>
            <img src={icons.get(props.value)} alt={props.value} style={styles.image} />
            <select value={props.value}
                onChange={(event) => props.onChange(event.target.value)}>
                {options}
            </select>
        </div>
    )
}

export default LanguageSwitch