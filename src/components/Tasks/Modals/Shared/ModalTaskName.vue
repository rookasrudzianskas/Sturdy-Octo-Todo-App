<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      v-autofocus="{ delayCordova: 700 }"
      v-select-all
      ref="name"
      class="col"
      clearable
      label="Task name" />
  </div>

</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'
import { autofocus } from 'src/directives/directive-autofocus'
export default {
  props: ['name'],
  directives: {
    selectAll,
    autofocus

  }
}
</script>

<style>


</style>
