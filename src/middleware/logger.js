import {ADD_COMMENT} from "../constants"
const uuidv1 = require('uuid/v1')

export default store => next => action => {
    if(action.type === ADD_COMMENT){

    }
    next(action);
}
