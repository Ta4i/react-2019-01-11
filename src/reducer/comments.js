import {normalizedComments} from '../fixtures';
import {ADD_COMMENT} from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments,
                [payload.comment.id]: {
                    id: payload.comment.id,
                    user: payload.comment.user,
                    text: payload.comment.text
                }
            }
            break;
        default:
            return comments
    }
}