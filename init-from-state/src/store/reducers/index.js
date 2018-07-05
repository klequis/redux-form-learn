import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import account from './account'


export default combineReducers({
  account,
  form: reduxFormReducer,
})
