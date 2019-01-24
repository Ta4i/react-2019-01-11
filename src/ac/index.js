import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SET_DATE_RANGE } from '../constants'

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const selectArticle = (article) => ({
    type: SELECT_ARTICLE,
    payload: article
})

export const setDateRange = (dateRange) => ({
    type: SET_DATE_RANGE,
    payload: {
        from: dateRange.from,
        to: dateRange.to
    }
})
