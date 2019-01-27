import {normalizedComments} from '../fixtures';
import { ADD_COMMENT } from '../constants';

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
        default:
            return comments
    }
}