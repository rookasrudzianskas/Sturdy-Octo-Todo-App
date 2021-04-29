<template>
  <q-card>

<!--    laebel to add the task with modal, inputs and so on-->

    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close" />
    </q-card-section>

<!--    form element -->

    <q-form @submit.prevent="submitForm">

      <q-card-section>

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            ref="name"
            class="col"
            clearable
            label="Task name" />
        </div>

        <!-- task data input field-->
        <div class="row q-mb-sm">

          <q-input
            outlined
            label="Due Date"
            v-model="taskToSubmit.dueDate"s
          >
            <template v-slot:append>
              <q-icon v-if="taskToSubmit.dueDate" @click="clearDueDate" name="close" class="cursor-pointer"></q-icon>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

        </div>
        <!-- task time input field-->
        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">

          <q-input outlined label="Due Time" v-model="taskToSubmit.dueTime">
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
  }
}
</script>

<style>


</style>
