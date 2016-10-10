import { SELECT_ARTICLE } from '../constants'

export function selectArticle(obj) {
    const action = {
        type: SELECT_ARTICLE,
        payload: {
            obj
        }
    }
    return action
}