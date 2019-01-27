import {normalizedComments} from '../fixtures';
import { ADD_COMMENT, DELETE_COMMENT } from '../constants';

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, { type, payload }) => {
    switch (type) {
        case ADD_COMMENT:
            const { id, user, text } = payload
            return {
                ...comments,
                [id]: {
                    id,
                    user,
                    text
                }
            }
            case DELETE_COMMENT: {
                const { id } = payload
                const newComments = {...comments}
                delete newComments[id]
                return newComments
            }
        default:
            return comments
    }
}