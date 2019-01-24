import {
    CHANGE_DATE_RANGE,
    CHANGE_SELECTED_OPTIONS,
} from '../constants';

const defaultState = {
    selectedOptions: [],
    dateRange: {
        from: undefined,
        to: undefined,
    },
};

export default (filter = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case CHANGE_DATE_RANGE:
            // Стоит ли разбить изменение диапазона на отдельные изменения from \ to ?
            return {
                ...filter,
                dateRange: payload.dateRange
            };
            // или dateRange: { ...payload.dateRange } ?
        case CHANGE_SELECTED_OPTIONS:
            // Стоит ли фильтровать массив выбранных опций вместо записи нового массива целиком?
            return {
                ...filter,
                selectedOptions: payload.selectedOptions
            };
            // или selectedOptions: [ ...payload.selectedOptions] ?
        default:
            return filter;
    }
}