import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT_ID } from '../constants'
import { arrayToRecordMap } from '../store/helpers'
import { Record, List } from 'immutable'

const articleRecord = Record({
    id : null,
    date : new Date().toISOString(),
    title: "",
    text: "",
    comments: List([])
})

export default (articles = arrayToRecordMap(normalizedArticles,articleRecord), action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
        case ADD_COMMENT_ID:
            const newArr = articles[payload.article_id].get('comments') || []
            // Наверное это делается как-то по другому 
            newArr.push(payload.comment_id)
            const newRecord = articles[payload.article_id].set('comments',newArr);
            return { ...articles, ...{[articles[payload.article_id].id] : newRecord } }
    }

    return articles
}
