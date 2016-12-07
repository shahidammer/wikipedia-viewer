import React from 'react'
import {render} from 'react-dom'
import Main from './components/Main'
import App from './components/App'
import Index from './components/Index'
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'
const router = (
  <Provider store={store}>
    <Router history = {history}>
      <Route path='/' component={Index}>
        <IndexRoute component={Main} />
        <Route path='/List' component={App} />
      </Route>
    </Router>
  </Provider>
)
render(
  router,
  document.getElementById('root')
)
