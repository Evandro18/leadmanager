import { combineReducers } from 'redux'
import leads from './leads'
import notifications from './notifications'

export default combineReducers({
  leads,
  notifications
});