import { combineReducers } from 'redux'
import projects from './reducers/projects'
import filters from './reducers/filters'

const rootReducer = combineReducers({
  projects,
  filters,
})

export default rootReducer
