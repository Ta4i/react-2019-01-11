import { START, SUCCESS, FAIL } from '../constants';

export default store => next => action => {
    const { callAPI, ...rest } = action
    if (!callAPI || rest.type.includes(START) || rest.type.includes(SUCCESS) || rest.type.includes(FAIL)) next(rest)

    next({ ...rest, type: rest.type + START })
    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({ ...rest, type: rest.type + SUCCESS, response }))
        .catch(error => {
            next({ ...rest, type: rest.type + FAIL, error })
        })
}