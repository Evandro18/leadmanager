import { REMOVE_SNACKBAR, ENQUEUE_SNACKBAR } from "./types";

//REMOVE SNACKBAR
export const removeSnackbar = (key) => dispatch => {
  dispatch({
    type: REMOVE_SNACKBAR,
    payload: key
  })
}

//ENQUEUE SNACKBAR
export const enqueueSnackbar = notification => dispatch => {
  dispatch({
    type: ENQUEUE_SNACKBAR,
    notification: {
      key: new Date().getTime() + Math.random(),
      ...notification,
    }
  })
};