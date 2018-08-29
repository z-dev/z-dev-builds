import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import _ from 'lodash'
import rootReducer from './rootReducer'

/* eslint-disable import/no-mutable-exports */

const isProd = process.env.NODE_ENV === 'production'

let store
let storeInitialized = false

if (!storeInitialized) {
  storeInitialized = true
  const logger = isProd ? null : createLogger()
  const middlewares = _.compact([thunk, freeze, logger])
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  store = createStoreWithMiddleware(rootReducer)
}

export default store
