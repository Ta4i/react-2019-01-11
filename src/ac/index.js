import { DELETE_ARTICLE, INCREMENT, SELECT } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const selectArticle = (option) => ({
  type: SELECT,
  payload: { option }
})
