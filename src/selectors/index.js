import { createSelector } from 'reselect';

export const filtersSelector = (store) => store.filters
export const articlesSelector = (store) => store.articles
export const commentsSelector = (store) => store.comments
export const idSelector = (_, ownProps) => ownProps.id

export const allArticlesAsListSelector = createSelector(
    articlesSelector,
    (articles) => {
        const articleList = []
        for (let key in articles) articleList.push(articles[key])
        return articleList
    }
)

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    allArticlesAsListSelector,
    (filters, articles) => {
        const { selected, dateRange: { from, to } } = filters

        console.log('filteredArticlesSelector');

        return articles.filter(article => {
            const publishedDate = Date.parse(article.date)
            return (
                !selected.length ||
                selected.find((selected) => selected.value === article.id)
            ) &&
                (
                    (!from || !to || (publishedDate > from && publishedDate < to))
                )
        })
    }
)

export const createCommentSelector = () => createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
        console.log('commentSelector', id);
        return comments[id]
    }
)

