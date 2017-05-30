import { combineReducers } from 'redux'

import cardReducer from './cardReducer'
import arenaReducer from './arenaReducer'

const clashApp = combineReducers({
  cardReducer,
  arenaReducer
})

export default clashApp
