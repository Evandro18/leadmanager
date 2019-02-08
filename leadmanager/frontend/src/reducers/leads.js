import { GET_LEADS, DELETE_LEADS } from '../actions/types.js'

const initialState = {
  leads: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEADS:
      const list = state.leads.filter(item => item.id != action.payload.id)
      return {
        ...state,
        leads: list
      }
    default:
      return state;
  }
}