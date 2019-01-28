import uuid from 'uuid'
import {ADD_COMMENT} from '../constants';

export default store => next => action => {

    if(action.type === ADD_COMMENT) {
        const id = uuid.v1()
        action.payload.comment.id = id
    }

    next(action);
}