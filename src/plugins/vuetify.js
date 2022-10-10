import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

const locales = {
  en: require('vuetify/es5/locale/en'),
  fr: require('vuetify/es5/locale/fr'),
}

const current = navigator.language.split('-')[0]

Vue.use(Vuetify)

export default new Vuetify({
  locales,
  current,
  breakpoint: {},
  icons: {
    iconfont: 'mdiSvg',
  },
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#393e46',
      warning: '#FFC107',
    },
  },
  theme: {
    light: true,
  },
})
