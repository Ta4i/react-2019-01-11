import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const filterArticle = (selectedOption) => ({
    type: FILTER_ARTICLE,
    payload: selectedOption
})
