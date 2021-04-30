<template>
  <q-card>

<!--    form element -->
<modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name"></modal-task-name>
        <!-- task data input field-->

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"/>

        <!-- task time input field-->
        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">

          <q-input class="col" outlined label="Due Time" v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon v-if="taskToSubmit.dueTime" @click="taskToSubmit.dueTime = ''" name="close" class="cursor-pointer"></q-icon>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

        </div>


      </q-card-section>
      <!-- the end of fieldss and the submit button-->
      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit"/>
      </q-card-actions>

      <pre>{{  taskToSubmit }}</pre>

    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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
    submitForm() {
      this.$refs.name.validate()
      if(!this.$refs.name.hasErrors) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
  }
}
</script>

<style>


</style>
