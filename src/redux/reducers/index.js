import accountReducer from './accountReducer'
import usersReducer from './usersReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  account:accountReducer,
  user:usersReducer
})

export default rootReducer
