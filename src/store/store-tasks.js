import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from "../boot/firebase";
// state to show all the task objects, as the objects
const state = {
	tasks: {
		// 'ID1': {
		// 	name: 'Go to shop',
		// 	completed: false,
		// 	dueDate: '2019/05/12',
		// 	dueTime: '18:30'
		// },
		// 'ID2': {
		// 	name: 'Get bananas',
		// 	completed: false,
		// 	dueDate: '2019/05/13',
		// 	dueTime: '14:00'
		// },
		// 'ID3': {
		// 	name: 'Get apples',
		// 	completed: false,
		// 	dueDate: '2019/05/14',
		// 	dueTime: '16:00'
		// }

	},
  search: "",
  sort: 'name'
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
  // adds the task from the modal to the state in the store
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
  },
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
  // gets the task from the add task modal and commits to the mutations with the payload, to the following it with id
  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task,
    }
    commit('addTask', payload)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  },
  fbReadData({ commit }) {
    console.log("start reading data from fb")
    let userId = firebaseAuth.currentUser.uid
    let userTasks = firebaseDb.ref('tasks/' + userId)

    // child added

    userTasks.on('child_added', snapshot => {
      let task = snapshot.val()
      // console.log(task)

      let payload = {
        id: snapshot.key,
        task: task,
      }

      commit('addTask', payload)
    })

    // chold change

    userTasks.on('child_changed', snapshot => {
      let task = snapshot.val()
      // console.log(task)

      let payload = {
        id: snapshot.key,
        updates: task
      }

      commit('updateTask', payload)
    })
  }
}

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},

    keysOrdered = Object.keys(state.tasks)
    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()

        if(taskAProp > taskBProp) {
          return 1
      } else if(taskAProp < taskBProp) {
          return -1
      } else {
          return 0
        }
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })
    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted
    let tasksFiltered = {}
    if (state.search) {
      // poopulate empty object
      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
          taskNameLowerCase= task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()
        if(taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }

    return  tasksSorted
  },
  //gets all the tasks from tasks state object and returs to use and display in the app
	tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
		let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];
      if(!task.completed) {
        tasks[key] = task
      }
    })
    // console.log(Object.keys(state.tasks))
    return tasks
	},

  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];
      if(task.completed) {
        tasks[key] = task
      }
    })
    // console.log(Object.keys(state.tasks))
    return tasks
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
