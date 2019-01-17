import React from 'react'

const Comment = (props) => {
    return (
        <div>
            <h4>{props.user}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment
