import { ADD_COMMENT } from '../constants'
import { addCommentId } from '../AC/articles'

export default store => next => action => {
    switch(action.type){
        case ADD_COMMENT :
            const comment = { id: Object.keys(store.getState().comments).length }
            Object.assign(action.payload, comment)
            next(action)
            next(addCommentId(action.payload.article_id, comment.id))
    }
}