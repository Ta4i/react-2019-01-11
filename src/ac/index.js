import {
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  CREATE_COMMENT,
  DELETE_ARTICLE,
  INCREMENT,
  RESET_DATE_RANGE
} from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const appendCommentToArticle = (commentId, articleId) => ({
  type: 'APPEND_COMMENT',
  payload: { commentId, articleId }
})

export const createComment = (comment, articleId) => ({
  type: CREATE_COMMENT,
  payload: { comment, articleId }
})

export const changeSelection = (selected) => ({
  type: CHANGE_SELECTION,
  payload: { selected }
})

export const changeDateRange = (dateRange) => ({
  type: CHANGE_DATE_RANGE,
  payload: { dateRange }
})

export const resetDateRange = () => ({
  type: RESET_DATE_RANGE
})
