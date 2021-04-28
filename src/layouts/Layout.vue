<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Hello world 🚀
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
    <q-item-label header>Navigation</q-item-label>
        <q-item
          clickable
          to="/"
          exact
        >
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-label>Todo</q-item-label>
        </q-item>

        <q-item
          clickable
          to="/settings"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-label>Settings</q-item-label>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

}
</script>
