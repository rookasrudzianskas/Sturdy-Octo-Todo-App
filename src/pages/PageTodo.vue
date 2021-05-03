<template>
  <q-page class="q-pa-md">
  <div class="row q-mb-lg">
      <search />
    <sort/>
  </div>

    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search Results</p>

<no-tasks
  v-if="!Object.keys(tasksTodo).length && !search"
    ></no-tasks>

<!--    sepates each task -->
<tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

<tasks-completed v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />
<!-- add task button-->
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>



    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>

  </q-page>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'
  import Search from "../components/Tools/Search";

	export default {
	  data() {
	    return {
        showAddTask: false
      }
    },
		computed: {
			...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
      ...mapState('tasks', ['search'])
		},
    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true
      })
    },
		components: {
      Search,
			'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
			'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
			'tasks-completed' : require('components/Tasks/TasksCompleted.vue').default,
			'no-tasks' : require('components/Tasks/NoTasks.vue').default,
			'search' : require('components/Tools/Search.vue').default,
			'sort' : require('components/Tools/Sort.vue').default,
		}
	}
</script>

<style>

</style>
