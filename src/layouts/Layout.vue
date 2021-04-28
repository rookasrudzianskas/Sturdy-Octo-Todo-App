<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

<!-- header of todo-->

        <q-toolbar-title class="absolute-center">
          Awesome Todo 🚀
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

<!-- end of header -->

<!--    start of footte -->

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          :key="nav.label"/>

      </q-tabs>
    </q-footer>
<!--    end of footer -->

<!--    left drawer -->

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
    <q-item-label header>Navigation</q-item-label>

        <q-item class="text-grey-4" v-for="nav in navs" clickable :to="nav.to" :key="nav.label" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            {{ nav.label }}
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

<!--    end of left drawer -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      // different pages todo, settings
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
<style lang="scss">
  @media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

  .q-drawer
    .q-router-link--exact-active {
    color: white !important;
  }
</style>
