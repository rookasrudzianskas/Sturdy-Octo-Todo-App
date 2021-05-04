import { firebaseAuth } from "../boot/firebase";
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
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  },

  handleAuthStateChanged({ commit }) {
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true)

      } else {
        commit('setLoggedIn', false)
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
