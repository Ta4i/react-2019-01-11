import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTED_OPTIONS,
} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const changeDateRange = (dateRange) => {
    console.log('changeDateRange', dateRange);
    return {
    type: CHANGE_DATE_RANGE,
    payload: {dateRange}
}};

export const changeSelectedOptions = (selectedOptions) => {
    console.log('changeSelectedOptions', selectedOptions);
    return {
    type: CHANGE_SELECTED_OPTIONS,
    payload: {selectedOptions}
}};
