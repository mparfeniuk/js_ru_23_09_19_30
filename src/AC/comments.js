import { ADD_COMMENT } from '../constants'

export function addComment(obj) {
    return {
        type: ADD_COMMENT,
        payload: obj
    }
}