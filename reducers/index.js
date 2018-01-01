import { combineReducers } from 'redux'
import * as feedReducer from './feed'

export default combineReducers(Object.assign(
  feedReducer,
))
