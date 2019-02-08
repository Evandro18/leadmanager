import { GET_LEADS, DELETE_LEADS, CREATE_LEADS, SET_EDIT_LEAD, UPDATE_LEAD } from '../actions/types.js'

const initialState = {
  leads: [],
  currentLead: {
    name: '',
    email: '',
    message: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEADS:
      return {
        ...state,
        leads: state.leads.filter(item => item.id != action.payload.id)
      }
    case CREATE_LEADS:
      return {
        ...state,
        leads: state.leads.concat([action.payload])
      }
    case SET_EDIT_LEAD:
      return {
        ...state,
        currentLead: action.payload
      }
    case UPDATE_LEAD:
      const list = state.leads.filter(item => item.id != action.payload.id)
      list.push(action.payload)
      return {
        ...state,
        leads: list
      }
    default:
      return state;
  }
}