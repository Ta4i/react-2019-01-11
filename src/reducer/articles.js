import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE, LINK_COMMENT_TO_ARTICLE} from '../constants';

export default (articles = normalizedArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case LINK_COMMENT_TO_ARTICLE:
        //console.log("payload 222")
         //console.log(payload)
            return articles.map(article => article.id === payload.parentId
                ? {
                    ...article,
                    comments: [
                        ...article.comments,
                        payload.commentId
                    ]
                } : article
            )
        default:
            return articles
    }
}