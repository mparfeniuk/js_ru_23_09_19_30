import { normalizedComments } from '../fixtures'
import { arrayToRecordMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'
import { Record } from 'immutable'

const commentRecord = Record({
    id : null,
    user : "User",
    text: ""
})


export default (comments = arrayToRecordMap(normalizedComments,commentRecord), action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT :
            const record = { [payload.id] : new commentRecord(payload) }
            return { ...comments, ...record }
        default :
            return comments
    }
}