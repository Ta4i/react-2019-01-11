import {normalizedComments} from '../fixtures';
import { ADD_COMMENT } from '../constants';

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, action) => {
    const {type, payload} = action
    //console.log(payload)
    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments,
                [payload.id] : {...payload}
            }
        default:
            return comments
    }
}