import { CREATE_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => {
  return {
    ...acc,
    [comment.id]: comment
  }
}, {})

export default (comments = defaultComments, action) => {
  const { type } = action
  switch (type) {
    case CREATE_COMMENT:
      const { comment } = action.payload
      return { ...comments, [comment.id]: comment }
    default:
      return comments
  }
}
