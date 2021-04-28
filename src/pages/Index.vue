<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="task in tasks">{{ task }} 🛍️</li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['Go to shop', 'Get bananas', 'Get apples']
    }
  }
}
</script>
