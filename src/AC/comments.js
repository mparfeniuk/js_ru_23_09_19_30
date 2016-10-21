import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import $ from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadComments(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { id }
        })

        setTimeout(() => {
            $.get(`/api/comment/?article=${id}`)
                .done(response => dispatch({
                    type:  LOAD_COMMENTS + SUCCESS,
                    payload: { id },
                    response
                }))
        }, 1000)
    }
}