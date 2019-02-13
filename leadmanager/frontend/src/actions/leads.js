import { GET_LEADS, DELETE_LEADS, CREATE_LEADS, SET_EDIT_LEAD, UPDATE_LEAD, ENQUEUE_SNACKBAR, CREATE_MESSAGE, GET_ERRORS } from './types'
import LeadsApi from '../apis/leads'
import store from '../store'
import { enqueueSnackbar } from './notifications';

//GET LEADS
export const getLeads = () => dispatch => {
  return LeadsApi.getLeads()
    .then(res => dispatch({
      type: GET_LEADS,
      payload: res.data
    }))
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      store.dispatch(enqueueSnackbar({ message: 'Failed to list data', options: { variant: 'error' } }))
    })
}

//DELETE LEADS
export const deleteLeads = (id) => dispatch => {
  return LeadsApi.deleteLeads(id)
    .then(res => {
      dispatch({
        type: DELETE_LEADS,
        payload: { id }
      })
      store.dispatch(enqueueSnackbar({ message: 'Removed with success', options: { variant: 'success' } }))
    }
    )
    .catch(err => {
      let notification = {}
      if (err.response.status === 400) {
        notification = {
          message: 'Invalid or null fields.',
          options: {
            variant: "error"
          }
        }
      }
      store.dispatch(enqueueSnackbar(notification))
    })
}

//CREATE LEADS
export const createLead = (lead) => dispatch => {
  return LeadsApi.createLead(lead)
    .then(res => {
      dispatch({
        type: CREATE_LEADS,
        payload: lead
      })
      store.dispatch(enqueueSnackbar({ message: 'Created with success', options: { variant: 'success' } }))
    })
    .catch(err => {
      let notification = {}
      if (err.response.status === 400) {
        notification = {
          message: 'Failed to create: invalid or null fields.',
          options: {
            variant: "error"
          }
        }
      }
      store.dispatch(enqueueSnackbar(notification))
    })
}

//SET EDIT LEAD
export const setEditLead = (lead) => dispatch => {
  dispatch({
    type: SET_EDIT_LEAD,
    payload: lead
  })
}

//UPDATE LEAD
export const updateLead = (lead) => dispatch => {
  return LeadsApi.updateLead(lead)
    .then(res => {
      dispatch({ type: UPDATE_LEAD, payload: res.data })
      store.dispatch(enqueueSnackbar({ message: 'Updated with success', options: { variant: 'success' } }))
    })
    .catch(err => {
      let notification = {}
      if (err.response.status === 400) {
        notification = {
          message: 'Failed to update: invalid or null fields',
          options: {
            variant: 'error'
          }
        }
      }
      dispatch({ type: ENQUEUE_SNACKBAR, payload: notification })
    })
}