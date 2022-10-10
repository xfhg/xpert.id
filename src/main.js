/* eslint-disable no-unused-vars */

import Vue from 'vue'

import './registerServiceWorker'

import App from './App.vue'
import router from './router'
import store from './store'

// -------------------------------------------------------------------------------------
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
// -------------------------------------------------------------------------------------

// plugins
const fire = require('@/plugins/firebase.js')

import vuetify from '@/plugins/vuetify'

import i18n from '@/plugins/i18n'

import '@/plugins/days'

// import sentry from '@/plugins/sentry'

import lodash from 'lodash'
import VueLodash from 'vue-lodash'

import Toast from 'vue-toastification'
//import 'vue-toastification/dist/index.css'

import VueTablerIcons from 'vue-tabler-icons'

import VuePageTransition from 'vue-page-transition'

import Vue2Editor from 'vue2-editor'

import VueLuxon from 'vue-luxon'

import VueMeta from 'vue-meta'

import VCalendar from 'v-calendar'

import '@/plugins/validate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import VueDiagonal from 'vue-diagonal'

Vue.component('vue-diagonal', VueDiagonal)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

import Editor from 'vue-editor-js/src/index'

Vue.use(Editor)

import VueCountdownTimer from 'vuejs-countdown-timer'

Vue.use(VueCountdownTimer)

Vue.use(VCalendar, {
  componentPrefix: 'vc',
})
Vue.use(VueMeta)
Vue.use(VueLuxon)
Vue.use(VueTablerIcons)
Vue.use(Vue2Editor)
Vue.use(VuePageTransition)
Vue.use(VueLodash, { name: 'ninja', lodash: lodash })
Vue.use(Toast, {})

Vue.config.productionTip = true

let app

fire.auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      vuetify,
      i18n,
      render: (h) => h(App),
    })
  }
})
