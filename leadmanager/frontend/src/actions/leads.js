import { GET_LEADS, DELETE_LEADS, CREATE_LEADS, SET_EDIT_LEAD, UPDATE_LEAD } from './types'
import LeadsApi from '../apis/leads'

//GET LEADS
export const getLeads = () => dispatch => {
  LeadsApi.getLeads()
    .then(res => dispatch({
      type: GET_LEADS,
      payload: res.data
    }))
    .catch(err => console.log(err)/* dispatch error */)
}

//DELETE LEADS
export const deleteLeads = (id) => dispatch => {
  LeadsApi.deleteLeads(id)
    .then(res => {
      dispatch({
        type: DELETE_LEADS,
        payload: { id }
      })
    })
    .catch(err => console.log(err)/* dispatch error */)
}

//CREATE LEADS
export const createLead = (lead) => dispatch => {
  LeadsApi.createLead(lead)
    .then(res => {
      dispatch({
        type: CREATE_LEADS,
        payload: lead
      })
    })
    .catch(err => console.log(err)/* dispatch error */)
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
  LeadsApi.updateLead(lead)
    .then(res =>
      dispatch({
        type: UPDATE_LEAD,
        payload: res.data
      }))
    .catch(err => console.log(err))
}