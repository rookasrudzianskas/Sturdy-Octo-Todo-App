<template>
  <q-card>

<!--    form element -->
<modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section>

        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName"></modal-task-name>

        <!-- task data input field-->

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"/>

        <!-- task time input field-->

        <modal-due-time v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime"/>

      </q-card-section>
      <!-- the end of fieldss and the submit button-->

      <modal-buttons></modal-buttons>

    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  mixins: [mixinAddEditTask],
  data() {
    return {
      // methot to submit the task
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),

    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
  }
}
</script>

<style>


</style>
