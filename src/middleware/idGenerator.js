import uuidv4 from 'uuid/v4'
import { ADD_COMMENT } from '../constants'

// Тут озадачился, от чего отталкиваться при именовании обвязок
export default store => next => action => {
  if (action.type === ADD_COMMENT) {
    action.payload = {
      ...action.payload,
      id: uuidv4()
    }
  }
  next(action);
}