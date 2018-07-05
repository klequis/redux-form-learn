import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

const dummy = (state = {}, { type, payload }) => {
  return state
}

export default combineReducers({
  dummy,
  form: reduxFormReducer,
})
