import axios from 'axios';
class LeadsApi {
  static getLeads () {
    return axios.get('/api/leads')
  }
  static deleteLeads (id) {
    return axios.delete(`/api/leads/${id}`)
  }
  static createLead (lead) {
    return axios.post(`/api/leads/`, { ...lead })
  }
  static updateLead (lead) {
    return axios.put(`/api/leads/${lead.id}/`, { ...lead })
  }
}

export default LeadsApi