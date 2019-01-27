import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createCommentSelector} from '../../selectors';

export const TypeComment = PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
})

class Comment extends Component {
    handleBtnClick = () => {
        const { id, onDelete } = this.props
        onDelete(id)
    }
    render() {
        const { user, text } = this.props.comment
        return (
            <div>
                <h4>{user}<button onClick={this.handleBtnClick}>Delete</button></h4>
                <p>{text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: TypeComment,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

const initMapStateToProps = () => {
    const commentSelector = createCommentSelector()
    return (store, ownProps) => {

        return {
            comment: commentSelector(store, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps
)(Comment)
