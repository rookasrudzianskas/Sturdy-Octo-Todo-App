<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>

<!-- one task, and the loop to make the tasks form arrat -->

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough' : task.completed}">{{ task.name }}</q-item-label>
        </q-item-section>

<!--        end of task -->

<!--        the right side of tasks -->

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                size="18px"
                class="q-mr-xs"
                name="event"/>
            </div>
              <div class="column">
          <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
          <q-item-label class="row justify-end"  caption><small>{{ task.dueTime }}</small></q-item-label>
            </div>
          </div>
        </q-item-section>

<!--        the end f right side of tasks -->

      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>
