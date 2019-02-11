import { ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from '../actions/types'

const initialState = {
  notifications: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      console.log(action.payload);
      return {
        notifications: [...state.notifications, action.payload.notification]
      }

    case REMOVE_SNACKBAR:
      return {
        notifications: state.notifications.filter(
          notification => notification.key !== action.payload
        )
      }
    default:
      return state
  }
}