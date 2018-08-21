import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

export default { 
  state: {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
      authorized: localStorage.getItem("user") ? true : false,
      token_expired: true
  },
  getters,
  mutations,
  actions,
}