import uuidv4 from 'uuid'

export default store => next => action => {
    if (action.generateUID){
        const uuid = uuidv4();
        action.payload.id = uuid;
    }
    next(action);
}