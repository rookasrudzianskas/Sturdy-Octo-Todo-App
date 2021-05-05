<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="tasksDownloaded">
  <div class="row q-mb-lg">
      <search />
    <sort/>
  </div>

    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length ">No search Results</p>
    <q-scroll-area class="q-scroll-area-tasks">
      <no-tasks
        v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
          ></no-tasks>

      <!--    sepates each task -->
      <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

      <tasks-completed class="q-mb-xl" v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />
    </q-scroll-area>
<!-- add task button-->
    <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
      <q-btn
        @click="showAddTask = true"
        round
        class="all-pointer-events"
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
      </template>

      <template v-else>
        <span class="absolute-center">
        <q-spinner-grid
          color="primary"
          size="2em"
        />
          </span>
      </template>
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
			...mapGetters('settings', ['settings']),
      ...mapState('tasks', ['search', 'tasksDownloaded']),
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
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
