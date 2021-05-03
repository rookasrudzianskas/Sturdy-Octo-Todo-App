<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      v-select-all
      ref="name"
      class="col"
      clearable
      label="Task name" />
  </div>

</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'
export default {
  props: ['name'],
  directives: {
    selectAll

  }
}
</script>

<style>


</style>
