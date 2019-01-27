import uuidv1 from 'uuid/v1'
import { CREATE_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === CREATE_COMMENT) {
    action.payload.comment.id = uuidv1()
  }
  next(action)
}
