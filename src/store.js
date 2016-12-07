import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
// Import Reducers
import reducer from './Reducer'

const middleware = applyMiddleware(promise(), thunk)
const store = createStore(reducer, middleware)

export const history = syncHistoryWithStore(browserHistory, store)
export default store
