import { REMOVE_SNACKBAR, ENQUEUE_SNACKBAR } from "./types";

//REMOVE SNACKBAR
export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  payload: key
})

//ENQUEUE SNACKBAR
export const enqueueSnackbar = notification => ({
  type: ENQUEUE_SNACKBAR,
  payload: {
    key: new Date().getTime() + Math.random(),
    ...notification,
  }
})