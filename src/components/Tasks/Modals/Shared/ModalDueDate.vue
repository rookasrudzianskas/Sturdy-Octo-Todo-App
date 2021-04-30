<template>
  <div class="row q-mb-sm">

    <q-input
      outlined
      label="Due Date"
      :value="dueDate"
      @input="$emit('update:name', $event)">
      <template v-slot:append>
        <q-icon v-if="dueDate" @click="clearDueDate" name="close" class="cursor-pointer"></q-icon>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date :value="dueDate">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

  </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<stylw></stylw>
