import React from 'react'
import PropTypes from "prop-types"

function Comment(props) {
    const { user, text } = props.comment
    return (
        <div  className='test--comment__container'>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        text: PropTypes.string,
    }).isRequired
}

export default Comment
