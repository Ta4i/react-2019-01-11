import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentsMapSelector } from '../../selectors';

export const TypeComment = PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
})

class Comment extends Component {
    render() {
        if (!this.props.commentMap.has(this.props.id)) return null
        const { user, text } = this.props.commentMap.get(this.props.id)
        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: TypeComment,
    id: PropTypes.string.isRequired
}

export default connect(
    state => ({
        commentMap: commentsMapSelector(state),
    }),
)(Comment)
