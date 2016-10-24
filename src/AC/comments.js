import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_PAGINATED_COMMENTS, START, SUCCESS, FAIL } from '../constants'
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

export function loadCommentsForArticle(articleId) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadPaginatedComments(page, limit){
    const offset = (page * limit) - limit
    return (dispatch) => {
        dispatch({
            type: LOAD_PAGINATED_COMMENTS + START,
        })

        setTimeout(() => {
            $.get(`/api/comment?limit=${limit}&offset=${offset}`)
                .done(response => {
                    response.records.length ?
                        dispatch({type: LOAD_PAGINATED_COMMENTS + SUCCESS, response}) :
                        dispatch({type: LOAD_PAGINATED_COMMENTS + FAIL, error: { responseText : "No comments"}})
                })
                .fail(error => dispatch({
                    type: LOAD_PAGINATED_COMMENTS + FAIL,
                    error : error
                }))
        }, 1000)
}}

/*
export function loadCommentsForArticle(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS_FOR_ARTICLE + START,
            payload: { articleId }
        })

        $.get(`/api/comment?article=${articleId}`)
            .done(response => dispatch({
                type: LOAD_COMMENTS_FOR_ARTICLE + SUCCESS,
                payload: { articleId },
                response
            }))
    }
}
*/
