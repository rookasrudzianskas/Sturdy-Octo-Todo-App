
// state to show all the task objects, as the objects
const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false,
  }
}

const mutations = {
  show12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },

  showTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value
  }
}

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit('show12HourTimeFormat', value)
  },
  setShowTasksInOneList({ commit }, value) {
    commit('showTasksInOneList', value)
  },
}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
	namespaced: true,
  state,
  mutations,
  actions,
  getters

}
