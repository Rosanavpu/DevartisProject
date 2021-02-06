
import { combineReducers } from "redux";
import { userReducer } from './userReducer'
import { feedsReducer } from './feedsReducer'

export default combineReducers({
  userReducer,
  feedsReducer
}) 