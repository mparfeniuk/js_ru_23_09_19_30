import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import comment_id from '../middlewares/comment_id'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(comment_id))

const store = createStore(reducer, {}, enhancer)

window.store = store
export default store

