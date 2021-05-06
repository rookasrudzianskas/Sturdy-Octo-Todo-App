<template>
  <q-layout view="hHh lpR fFf" style="margin-bottom: 10px">
    <q-header elevated>
      <q-toolbar>
<!-- top things-->
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn v-if="!loggedIn" to="/auth" class="absolute-right" flat icon-right="account_circle" label="Login" />
        <q-btn v-else @click="logoutUser" class="absolute-right" flat icon-right="account_circle" label="Log out" />


      </q-toolbar>
    </q-header>
<!-- footer-->
    <q-footer class="ilgas">
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
       />
      </q-tabs>
    </q-footer>
<!-- and the section with navigation-->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="$q.platform.is.electron"
          @click="quitApp"
          class="text-grey-4 absolute-bottom"
          clickable>
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Quit</q-item-label>
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
  import { openURL } from 'quasar'
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'MyLayout',
    data () {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop,
        navs: [
          {
            label: 'Todo',
            icon: 'list',
            to: '/'
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings'
          }
        ]
      }
    },
    computed: {
      ...mapState('auth', ['loggedIn']),
    },
    methods: {
      ...mapActions('auth', ['logoutUser']),
      openURL,
      quitApp() {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Really quit awesome todo?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          if(this.$q.platform.is.electron){
          require('electron').ipcRenderer.send('quit-app')
          }
        })
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

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }



  .platform-ios {
    .q-header {
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
    }

    .q-footer {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }


  }


</style>
