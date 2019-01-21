import React from 'react'

function Comment(props) {
    const { user, text } = props.comment
    return (
        <div  className='test--comment__container'>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Comment
