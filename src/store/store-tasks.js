import Vue from 'vue'
import { uid } from 'quasar'

// state to show all the task objects, as the objects
const state = {
	tasks: {
		'ID1': {
			name: 'Go to shop',
			completed: false,
			dueDate: '2019/05/12',
			dueTime: '18:30'
		},
		'ID2': {
			name: 'Get bananas',
			completed: false,
			dueDate: '2019/05/13',
			dueTime: '14:00'
		},
		'ID3': {
			name: 'Get apples',
			completed: false,
			dueDate: '2019/05/14',
			dueTime: '16:00'
		}
	}
}

const mutations = {
  // fires then the action upadteTask fires to update the task
  updateTask(state, payload) {
    // console.log('🚀', payload)
    // assigns all the updates to the task
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  // fires then the action is fired deleteTask, to delete the task
  deleteTask(state, id) {
    // console.log('🚀', id)
    // just deletes the task from tasks object by id
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  // is fired from the task.vue to update the task
  updateTask({ commit }, payload) {
    // fires the mutation
    commit('updateTask', payload)
  },
  // is called to delete task from taks.vue
  deleteTask({commit}, id) {
    // fires the mutation
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task,
    }
    commit('addTask', payload)
  }
}

const getters = {
  //gets all the tasks from tasks state object and returs to use and display in the app
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
