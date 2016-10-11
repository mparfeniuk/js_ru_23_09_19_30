import { SELECT_ARTICLE, GET_DATE_RANGE } from '../constants'

export function selectArticle(obj) {
    const action = {
        type: SELECT_ARTICLE,
        payload: {
            obj
        }
    }
    return action
}

export function getDateRange(obj){
    const action = {
        type: GET_DATE_RANGE,
        payload: {
            obj
        }
    }
    return action
    
}