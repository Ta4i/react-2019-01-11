import uuidv1 from 'uuid/v1'
import { CREATE_COMMENT } from '../constants'
import { appendCommentToArticle } from '../ac'

export default (store) => (next) => (action) => {
  if (action.type === CREATE_COMMENT) {
    const { comment, articleId } = action.payload
    comment.id = uuidv1()
    store.dispatch(appendCommentToArticle(comment.id, articleId))
  }
  next(action)
}
