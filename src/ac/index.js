import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const selectArticle = (selectedOption) => ({
    type: SELECT_ARTICLE,
    payload: selectedOption
})
