import {normalizedComments} from '../fixtures';
import {ADD_COMMENT} from '../constants'
import arrToMap from '../utils/arrToMap'

export default (state = arrToMap(normalizedComments), action) => {
    const {type, payload, newId} = action
    switch (type) {
        case ADD_COMMENT: {
            return {
                ...state,
                [newId]: {
                    ...payload.comment,
                    id: newId
                }
            }
        }
        default: return state
    }
}