import React from 'react'
import './comment.css'
import PropTypes from 'prop-types';

function Index(props) {
    const { user, text } = props.comment
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    )
}
Index.propTypes = {
   comment: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      user: PropTypes.string
   })
}

export default Index
