import { DELETE_ARTICLE, INCREMENT, SELECT, SELECT_RANGE } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const selectArticles = (options) => ({
  type: SELECT,
  payload: { options }
})

export const selectRange = (range) => ({
  type: SELECT_RANGE,
  payload: { range }
})
