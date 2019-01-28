import { ADD_COMMENT, ADD_COMMENT_ARTICLE } from '../constants'

const uuidv1 = require('uuid/v1');

export default store => next => action => {
  switch (action.type) {
    case ADD_COMMENT_ARTICLE: {
      const id = uuidv1();

      next({
        type: action.type,
        payload: {
          id: action.payload.articleId,
          commentId: id
        }
      });

      next({
        type: ADD_COMMENT,
        payload: {
          id,
          user: action.payload.user,
          text: action.payload.text
        }
      })

      return;
    }

    default: next(action);
  }
}
