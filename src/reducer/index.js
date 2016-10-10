import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import selected from './filters'
//и опять же даты не хватает
export default combineReducers({
    articles, count, selected
})
