<template>
  <q-select map-options emit-value class="col q-ml-sm" filled v-model="sortBy" :options="options" label="Sort By" stack-label/>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data () {
    return {
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
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}

</script>

<style scoped>
.q-select {
  /*should not grow in width, should not shrink and ther third one base width*/
  flex: 0 0 112px;
}
</style>
