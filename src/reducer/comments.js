import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'

export default (state = arrToMap([]), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})

        case LOAD_COMMENTS + SUCCESS:
            for(let i=0; i < response.length; i++) {
                state = state.set(response[i].id, response[i])
            }
            return state

        default:
            return state
    }
}
