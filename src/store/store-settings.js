import { LocalStorage } from 'quasar'

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
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings)
  }
}

const actions = {
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('show12HourTimeFormat', value)
    dispatch('saveSettings')
  },
  setShowTasksInOneList({ commit,dispatch }, value) {
    commit('showTasksInOneList', value)
    dispatch('saveSettings')
  },
  saveSettings({ state }) {
    LocalStorage.set('settings', state.settings)
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }
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
