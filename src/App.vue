<template>
  <v-app>
    <appbar></appbar>
    <v-overlay z-index="50000" color="white" opacity="1" :value="loadingBlock">
      <v-row no-gutters>
        <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          sm="12"
          md="8"
          xl="8"
        >
          <logo-animated
            lwidth="200px"
            lheight="200px"
            lfill="#f7fafc"
            lstroke="#39444b"
            lstrokewidth="3px"
            class="ma-5"
          ></logo-animated>
        </v-col>
        <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      </v-row>
    </v-overlay>
    <v-main no-gutters fill-height>
      <v-container fluid class="ma-0 pa-0">
        <vue-page-transition name="fade-in-up">
          <router-view></router-view>
        </vue-page-transition>
      </v-container>
    </v-main>
    <v-snackbar
      class="pa-1 mb-5"
      v-model="snackWithButtons"
      bottom
      center
      timeout="-1"
    >
      {{ snackWithBtnText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#00f500" v-bind="attrs" @click.stop="refreshApp">
          {{ snackBtnText }}
        </v-btn>
        <!-- <v-btn icon class="ml-4" @click="snackWithButtons = false">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
      </template>
    </v-snackbar>
    <footerbar fcolor="#f7fafc"></footerbar>
  </v-app>
</template>

<script>
  import 'vuetify/dist/vuetify.min.css'
  import 'nprogress/nprogress.css'

  import store from '@/store'
  import { get } from 'vuex-pathify'

  import LogoAnimated from '@/components/main/LogoAnimated'

  import Appbar from '@/components/navigation/AppBar'

  import Footerbar from '@/components/navigation/FooterBar'

  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Surround yourself with Excellence',
      // all titles will be injected into this template
      titleTemplate: 'XPERT.ID · %s  ',

      meta: [
        { name: 'description', content: 'Description XPERT' },
        { property: 'og:title', content: 'ogtitle XPERT' },
        { property: 'og:site_name', content: 'ogsitename XPERT' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
      ],
    },
    components: {
      /* eslint-disable vue/no-unused-components */
      Appbar,
      Footerbar,
      LogoAnimated,
    },

    data: () => ({
      cronjob: '',

      refreshing: false,
      registration: null,
      snackBtnText: '',
      snackWithBtnText: '',
      snackWithButtons: false,
    }),

    computed: {
      loadingBlock: get('status@loadingBlock'),
      loading: get('status@loading'),
    },
    created: function () {
      this.backend()

      // Listen for swUpdated event and display refresh snackbar as required.
      document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
      // Refresh all open app tabs when a new service worker is installed.
      if (navigator.serviceWorker) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (this.refreshing) return
          this.refreshing = true
          window.location.reload()
        })
      }

      store.dispatch('system/bindData')
    },

    methods: {
      backend: function () {
        this.cronjob = setInterval(() => {
          if (!this.loading && !this.loadingBlock) {
            store.dispatch('system/backendSync', { background: true })
            console.log('backend integrity triggered')
          }
        }, 60000)
      },

      showRefreshUI(e) {
        // Display a snackbar inviting the user to refresh/reload the app due
        // to an app update being available.
        // The new service worker is installed, but not yet active.
        // Store the ServiceWorkerRegistration instance for later use.
        this.registration = e.detail
        this.snackBtnText = 'UPDATE'
        this.snackWithBtnText = 'New XPERT.ID version available!'
        this.snackWithButtons = true
      },
      refreshApp() {
        this.snackWithButtons = false
        // Protect against missing registration.waiting.
        if (!this.registration || !this.registration.waiting) {
          return
        }
        this.registration.waiting.postMessage('skipWaiting')
      },
    },
  }
</script>

<style>
  a {
    text-decoration: none;
    outline: 0;
  }

  a:hover,
  a:active,
  a:focus {
    outline: 0;
  }
  button {
    outline: 0;
  }
  * {
    outline: 0;
  }

  button:-moz-focusring,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    outline: 0 !important;
  }

  html {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none; /* Chrome/Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
  }

  #nprogress .bar {
    background: #32e0c4 !important;
    height: 3px !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #32e0c4, 0 0 5px #32e0c4 !important;
  }

  #nprogress .spinner {
    bottom: auto !important;
    top: 20px !important ;
    right: 25px !important;
  }

  #nprogress .spinner-icon {
    border-top-color: #32e0c4 !important;
    border-left-color: #32e0c4 !important;
  }

  body,
  html {
    overflow-x: hidden;
  }
</style>
