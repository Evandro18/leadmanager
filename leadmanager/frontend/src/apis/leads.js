import axios from 'axios';
class LeadsApi {
  static getLeads () {
    return axios.get('/api/leads')
  }
  static deleteLeads (id) {
    return axios.delete(`/api/leads/${id}`)
  }
}

export default LeadsApi