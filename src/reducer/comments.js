import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_PAGINATED_COMMENTS, SUCCESS, START, FAIL } from '../constants'
import { Record, Map, fromJS } from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const defaultState = new fromJS({
    entities: new Map({}),
    total : null,
    loading : false,
    fail : {
        status : false,
        msg : ''
    }
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.update('entities', entities =>
                entities.merge(arrayToMap(response, comment => new CommentModel(comment)))
            )

        case LOAD_PAGINATED_COMMENTS + START:
            return comments.set('loading',true)

        case LOAD_PAGINATED_COMMENTS + SUCCESS:
            return comments
                .update('entities',
                    entities => entities.merge(
                        arrayToMap(response.records, comment => new CommentModel(comment))
                    )
                )
                .set('total',response.total)
                .set('loading',false)
                .set('loaded',true)

        case LOAD_PAGINATED_COMMENTS + FAIL:
            return comments
                .setIn(['fail','status'],true)
                .setIn(['fail','msg'],error.responseText)
                .set('loading',false)

    }

    return comments
}