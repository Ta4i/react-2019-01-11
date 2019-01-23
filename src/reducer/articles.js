import articlesMock from '../fixtures'
import {DELETE_ARTICLE, SELECT_ARTICLE} from '../constants'

export default (articles = articlesMock, action) => {
   const {type, payload} = action
   switch (type) {
      case DELETE_ARTICLE:
         console.log('222222222222',payload)
         return articles.filter(article => article.id !== payload.id)
      case SELECT_ARTICLE:
         console.log('1111111111',payload)
         const ids = payload.map(item => item.value)
         return articlesMock.filter(article => ids.includes(article.id))
         break
      default:
         return articles
   }
}
