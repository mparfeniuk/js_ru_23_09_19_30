import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import selected from './filters'
import date_range from './date_range'
//и опять же даты не хватает
export default combineReducers({
    articles, count, selected, date_range
})
