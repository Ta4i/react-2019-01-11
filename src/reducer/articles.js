import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../constants';
import {ADD_COMMENT} from '../constants'
import arrToMap from '../utils/arrToMap'

export default (articles = arrToMap(normalizedArticles), action) => {
    const {type, payload, newId} = action

    switch (type) {
        case DELETE_ARTICLE:
            const articlesCopy = {...articles}
            delete articlesCopy[payload.id]
            return articlesCopy
            
        case ADD_COMMENT:
            const article = articles[payload.articleId]
            return {
                ...articles,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(newId)
                }
            }
        default:
            return articles
    }
}