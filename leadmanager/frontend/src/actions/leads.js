import { GET_LEADS, DELETE_LEADS } from './types'
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