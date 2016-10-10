import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import selected from './filters'

export default combineReducers({
    articles, count, selected
})