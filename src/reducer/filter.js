import articlesMock from '../fixtures'
import {FILTER_ARTICLE} from '../constants'


export default (articles = articlesMock, action) => {
   const {type, payload} = action
   switch (type) {
      case FILTER_ARTICLE:
         console.log('1111111111',payload.length)
         if (payload.length === 0) {
            return articlesMock
         } else {
            const ids = payload.map(item => item.value)
            return articlesMock.filter(article => ids.includes(article.id))
         }
         break
      default:
         return articles
   }
}
