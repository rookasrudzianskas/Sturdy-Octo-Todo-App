import { firebaseAuth } from "../boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "../functions/function-show-error-message";
import firebase from "firebase";

// state to show all the task objects, as the objects
const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },

  handleAuthStateChanged({ commit,dispatch }) {
    firebaseAuth.onAuthStateChanged((user) => {
      Loading.hide()
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/')
        dispatch('tasks/fbReadData', null, { root:true })

      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth')
      }
    });
  },

  logoutUser() {
    console.log('hahah')
    firebaseAuth.signOut()
  }

}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
