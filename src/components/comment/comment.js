import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    const { user, text } = props.comment
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}

Comment.defaultProps = {
  user: '',
  text: '',
}

Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
}

export default Comment
