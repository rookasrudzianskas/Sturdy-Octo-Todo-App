<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import  {mapActions} from "vuex"

export default {
  methods: {
    ...mapActions('settings', ['getSettings']),
    ...mapActions('auth', ['handleAuthStateChanged']),
  },
  mounted() {
    if(this.$q.platform.is.electron) {
    require('electron').ipcRenderer.on('show-settings', () => {
      this.$router.push('/settings')
    })
    }
    this.getSettings()
    this.handleAuthStateChanged()
  }
}
</script>

<style>
/* just line to show the completed tasks*/
	.text-strikethrough {
		text-decoration: line-through;
	}
</style>
