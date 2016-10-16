import { DELETE_ARTICLE, ADD_COMMENT_ID } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addCommentId(article_id, comment_id){
    return {
        type : ADD_COMMENT_ID,
        payload : {
            article_id,
            comment_id
        }
    }
    
}