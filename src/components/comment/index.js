import React from 'react'
import PropTypes from 'prop-types';

const Comment = props => {
    const { user, text } = props.comment;
    return (
        <div>
            <h4>{user}</h4>
            <p>{text}</p>
        </div>
    );
}

const commentPropTypes = PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
});

Comment.propTypes = {
    comment: commentPropTypes,
}

export { commentPropTypes };
export default Comment;
