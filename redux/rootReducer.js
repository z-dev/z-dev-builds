import { combineReducers } from 'redux'
import builds from './reducers/builds'

const rootReducer = combineReducers({
  builds,
})

export default rootReducer
