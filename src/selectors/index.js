import { createSelector } from 'reselect';

export const filtersSelector = (store) => store.filters
export const loadingSelector = (store) => store.articles.loading
export const commentsLoadingSelector = (store) => store.comments.loading
export const loadedSelector = (store) => store.articles.loaded
export const commentsLoadedSelector = (store) => store.comments.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articlesSelector = createSelector(
    articlesMapSelector,
    (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsMapSelector = (store) => store.comments.entities
export const commentsSelector = createSelector(
    commentsMapSelector,
    (commentsMap) => commentsMap.valueSeq().toArray()
)
export const idSelector = (_, ownProps) => ownProps.id

export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
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
        return comments.get(id)
    }
)

