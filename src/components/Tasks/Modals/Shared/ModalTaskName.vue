<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      class="col"
      clearable
      label="Task name" />
  </div>

</template>

<script>
export default {
  props: ['name']
}
</script>

<style>


</style>
