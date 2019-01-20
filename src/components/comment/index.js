import React from 'react'
import './comment.css'

function Index(props) {
    const { user, text } = props.comment
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Index
