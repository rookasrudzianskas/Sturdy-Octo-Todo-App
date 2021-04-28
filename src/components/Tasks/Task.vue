<template>
  <q-item
  	@click="updateTask"
  	:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
  	clickable
  	v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }">
      	{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
    	<div class="row">
    		<div class="column justify-center">
		    	<q-icon
		    		name="event"
		    		size="18px"
		    		class="q-mr-xs" />
    		</div>
	    	<div class="column">
          <q-item-label
          	class="row justify-end"
          	caption>
          	{{ task.dueDate }}
          </q-item-label>
          <q-item-label
          	class="row justify-end"
          	caption>
          	<small>{{ task.dueTime }}</small>
          </q-item-label>
	    	</div>
    	</div>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex"
	export default {
		props: ['task', 'id'],
    methods: {
		  ...mapActions('tasks', ['updateTask'])
    }
	}
</script>

<style>

</style>
