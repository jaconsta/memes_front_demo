import { combineReducers } from 'redux'
//import { routeReducer } from 'react-router-redux'
import rawImages from './rawImages'
import memes from './memes'

export default combineReducers({
  //routing: routeReducer,
  memes,
  rawImages,
})
