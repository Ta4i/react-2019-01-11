import {normalizedComments} from '../fixtures';
import {ADD_COMMENT} from "../constants"

const defaultComments = normalizedComments.reduce((acc, comment) => {
   return {
      ...acc,
      [comment.id]: comment
   }
}, {})

export default (comments = defaultComments, action) => {
   const {type, payload} = action
   switch (type) {
      case ADD_COMMENT:
         return {payload}
      default:
         return comments
   }
}
