import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

const ReducerState = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerState(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(
                ['entities', randomId],
                new CommentRecord({...payload.comment, id: randomId})
            );
        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true);
        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments.merge({
                loading: false,
                loaded: true,
                entities: arrToMap(response, CommentRecord)
            });
        case LOAD_ALL_COMMENTS + FAIL:
            return comments.merge({
                loading: false,
                error
            });
        default:
            return comments
    }
}
