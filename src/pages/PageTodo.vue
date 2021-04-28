<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>

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

      </q-item>

    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'GO to shop',
          completed: false,
          dueDate: '2021/04/23',
          dueTime: '14:34',
        },

        {
          id: 2,
          name: 'Get to bananas',
          completed: false,
          dueDate: '2021/04/24',
          dueTime: '14:35',
        },

        {
          id: 3,
          name: 'Go to home',
          completed: false,
          dueDate: '2021/04/26',
          dueTime: '14:33',
        },
      ]
    }
  }
}
</script>
