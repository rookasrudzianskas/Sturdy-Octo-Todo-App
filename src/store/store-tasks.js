const state = {
  tasks: [
      {
        id: 1,
        name: 'GO to shop',
        completed: false,
        dueDate: '2021/04/23',
        dueTime: '14:34',
      },

      {
        id: 2,
          name: 'Get to bananas',
        completed: false,
        dueDate: '2021/04/24',
        dueTime: '14:35',
      },

      {
        id: 3,
          name: 'Go to home',
        completed: false,
        dueDate: '2021/04/26',
        dueTime: '14:33',
      },
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
