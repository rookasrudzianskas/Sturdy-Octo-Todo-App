<template>
  <div class="q-mt-lg">
    <list-header bgColor="bg-green-4">COMPLETED</list-header>
  <q-list
    v-if="Object.keys(tasksCompleted).length"
    separator
    bordered>
    <!-- the task for loop -->
    <task
      v-for="(task, key) in tasksCompleted"
      :key="key"
      :task="task"
      :id="key"></task>

  </q-list>
  </div>
</template>


<script>
export default  {
  props: ['tasksCompleted'],
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'list-header' : require('components/Shared/ListHeader.vue').default,
  }
}
</script>

<style>


</style>
