<template>
  <q-page padding>
		<q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hours time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="show12HourTimeFormat" color="blue" />

        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
	export default {

    computed: {
	    ...mapGetters('settings', ['settings']),
      show12HourTimeFormat: {
	      get() {
          return this.settings.show12HourTimeFormat
        },
        set(value) {
	        // trigger an action
          this.setShow12HourTimeFormat(value)

        }
      }
    },
    methods: {
      ...mapActions('settings', ['setShow12HourTimeFormat'])

    }
	}
</script>

<style>

</style>
