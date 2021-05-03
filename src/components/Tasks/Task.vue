<template>
<!--  label to add the task -->
  <q-item
  	@click="updateTask({id: id, updates: { completed: !task.completed }})"
  	:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
  	clickable
  	v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
    </q-item-section>
<!-- the task itself-->
    <q-item-section>
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }" v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>
<!-- 👉 section with date, time and delete--->
     <q-item-section v-if="task.dueDate" side>
    	<div class="row">
    		<div class="column justify-center">
		    	<q-icon
		    		name="event"
		    		size="18px"
		    		class="q-mr-xs" />
    		</div>
	    	<div class="column">
          <q-item-label
          	class="row justify-end"
          	caption>
          	{{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label
          	class="row justify-end"
          	caption>
          	<small>{{ task.dueTime }}</small>
          </q-item-label>
	    	</div>
    	</div>
    </q-item-section>
<!-- 🕵️‍♂️ delete -->
    <q-item-section side>
<div class="row">
      <q-btn
        @click.stop="showEditTaskModal"
        flat
        round
        dense
        color="primary"
        icon="edit" />

      <q-btn
        @click.stop="promptToDelete(id)"
        flat
        round
        dense
        color="red"
        icon="delete" />
</div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { date } from 'quasar'
const { addToDate } = date
	export default {
		props: ['task', 'id'],
    data() {
		  return {
		    showEditTask: false
      }
    },
    computed: {
		  ...mapState('tasks', ['search']),
    },
    // we get actions from the store update and delete
    methods: {
		  ...mapActions('tasks', ['updateTask', 'deleteTask']),
      // popup to delete the task
      showEditTaskModal() {
		    this.showEditTask = true
      },
      promptToDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Would you like to delete?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          // fire the delete task action in the store
          this.deleteTask(id)
        })
      }
    },
    filters: {
		  niceDate(value) {
		    return date.formatDate(value, 'MMM D')

      },
      searchHighlight(value, search) {
        if(search) {
          let searchRegExp = new RegExp(search, 'ig')
          return value.replace(searchRegExp,(match) => {
            return '<span class="bg-yellow-6">' + match + '</span>'
          })
        }
        return value
      }
    },
    components: {
		  'edit-task': require('../Tasks/Modals/EditTask.vue').default
    }
	}
</script>

<style>

</style>
