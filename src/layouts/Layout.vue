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


    <q-footer>
      <q-tabs>
        <q-route-tab
          to="/"
          icon="list"
          label="todo" />

        <q-route-tab
          to="/settings"
          icon="settings"
          label="settings" />

      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
    <q-item-label header>Navigation</q-item-label>

        <q-item v-for="nav in navs" clickable :to="nav.to" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            {{ nav.label }}
          </q-item-section>
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
  data() {
    return {
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/',
        },

        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
        },

      ]
    }
  }

}
</script>
