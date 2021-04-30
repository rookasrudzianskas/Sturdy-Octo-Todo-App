<template>
  <q-page class="q-pa-md">

<!--    sepates each task -->
		<q-list
      v-if="Object.keys(tasksTodo).length"
			separator
			bordered>
<!-- the task for loop -->
			<task
				v-for="(task, key) in tasksTodo"
		  	:key="key"
		  	:task="task"
		  	:id="key"></task>

		</q-list>
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
	import { mapGetters } from 'vuex'

	export default {
	  data() {
	    return {
        showAddTask: false
      }
    },
		computed: {
			...mapGetters('tasks', ['tasksTodo'])
		},
		components: {
			'task' : require('components/Tasks/Task.vue').default,
			'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
		}
	}
</script>

<style>

</style>
