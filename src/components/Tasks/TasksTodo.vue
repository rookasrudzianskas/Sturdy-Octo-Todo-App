<template>
<div>
  <list-header bgColor="bg-orange-4">TODO</list-header>
  <q-list
    separator
    bordered>
    <!-- the task for loop -->
    <task
      v-for="(task, key) in tasksTodo"
      :key="key"
      :task="task"
      :id="key"></task>

  </q-list>
</div>
</template>


<script>
export default  {
  props: ['tasksTodo'],
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'list-header' : require('components/Shared/ListHeader.vue').default,
  }
}
</script>

<style>


</style>
