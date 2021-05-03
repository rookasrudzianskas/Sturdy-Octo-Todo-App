<template>
  <q-select map-options emit-value class="col q-ml-sm" filled v-model="sortBy" :options="options" label="Sort By" stack-label/>
</template>

<script>
export default {
  data () {
    return {
      sortBy: null,

      options: [
        {
          label: 'Name',
          value: 'name'
        },

        {
          label: 'Date',
          value: 'dueDate',
        }
      ],
    }
  }
}

</script>

<style scoped>
.q-select {
  /*should not grow in width, should not shrink and ther third one base width*/
  flex: 0 0 112px;
}
</style>
