import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../constants';

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {});

const articlesIds = normalizedArticles.map(article => article.id);

const initialState = {
    data: articlesMap,
    ids: articlesIds
}

export default (articles = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:

            const newData = {...articles.data};
            delete newData[payload.id];
            return {
                ...articles,
                ids: articles.ids.filter(id => id !== payload.id),
                data: newData,
            }
        default:
            return articles
    }
}