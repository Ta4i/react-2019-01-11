import uuidv4 from 'uuid'
import {ADD_COMMENT} from '../constants'
import {linkCommentToArticle} from '../ac'
	
export default store => next => action => {
    const {type, payload} = action;
	if (type === ADD_COMMENT) {
	    const id = uuidv4()
		const {user, text, parentId} = payload
	    store.dispatch(linkCommentToArticle(id, parentId))
	    action.payload = {id,
	        user,
	        text
		}
		
    }
	
	next(action)
}