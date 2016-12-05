import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducer'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(promise(), thunk)
const store = createStore(reducer, middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
