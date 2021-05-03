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
export default {
  props: ['name'],
  directives: {
    selectAll: {
      inserted(el) {
        let input = el.querySelector('q-field__native')
        input.addEventListener('focus', () => {
          if(input.value.length){
            input.select()
          }

        })
      }
    }
  }
}
</script>

<style>


</style>
