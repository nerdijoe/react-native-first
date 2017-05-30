import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import clasApp from '../reducers'

const middlewares = applyMiddleware( logger, thunk )

const store = createStore(clasApp, middlewares)

export default store
