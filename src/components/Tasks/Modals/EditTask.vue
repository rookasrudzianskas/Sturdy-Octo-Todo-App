<template>
  <q-card>

<!--    form element -->
<modal-header>Edit Task</modal-header>
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
import mixinAddEditTask from "../../../mixins/mixin-add-edit-task";


export default {
  mixins: [mixinAddEditTask],
  props: ['task', 'id'],
  data() {
    return {
      // methot to submit the task
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
    },

    mounted() {
      this.taskToSubmit = Object.assign({}, this.task)
    }
}
</script>

<style>


</style>
