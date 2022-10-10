/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import Vuex, { Store } from 'vuex'
import pathify from 'vuex-pathify'

import router from '@/router/index'

import createPersistedState from 'vuex-persistedstate'

import SecureLS from 'secure-ls'
var ls = new SecureLS({ isCompression: false })

import auth from '@/store/modules/auth'
import user from '@/store/modules/user'
import system from '@/store/modules/system'
import xpert from '@/store/modules/xpert'
import account from '@/store/modules/account'
import global from '@/store/modules/global'
import talent from '@/store/modules/talent'
import academy from '@/store/modules/academy'
import bit from '@/store/modules/bit'
import storm from '@/store/modules/storm'

import NProgress from 'nprogress'

import i18n from '@/plugins/i18n'

Vue.use(Vuex)

import { make } from 'vuex-pathify'

const state = {
  status: {
    loading: null,
    error: null,
    success: null,
    warning: null,
    info: null,
    message: null,
  },
  nonuser: {
    locale: 'en',
    invited: '',
  },
}

const mutations = {
  ...vuexfireMutations,
  ...make.mutations(state),
}

const actions = {
  pushRoute({ commit }, payload) {
    router.push(payload)
  },

  updateLocale({ commit }, payload) {
    if (payload.locale != 'undefined') {
      i18n.locale = payload.locale
    } else {
      i18n.locale = 'en'
    }
  },

  updateGlobalStatus({ commit }, payload) {
    if (payload.clean) {
      this.set('status', {
        loading: false,
        loadingBlock: false,
        error: null,
        success: null,
        warning: null,
        info: null,
        message: null,
      })
    }
    if (payload.message) {
      this.set('status@message', payload.message)
    }
    if (payload.loading === true) {
      if (!payload.background) {
        NProgress.start()
      }
      if (payload.block) {
        this.set('status@loadingBlock', payload.block)
      } else {
        this.set('status@loading', payload.loading)
      }
    } else {
      if (!payload.background) {
        NProgress.done()
      }
      switch (payload.type) {
        case 'error':
          this.set('status@error', payload.error)
          this.set('status@loading', null)
          this.set('status@loadingBlock', null)
          break
        case 'success':
          this.set('status@success', payload.success)
          this.set('status@loading', null)
          this.set('status@loadingBlock', null)
          break
        case 'warning':
          this.set('status@warning', payload.warning)
          this.set('status@loading', null)
          this.set('status@loadingBlock', null)
          break
        case 'info':
          this.set('status@info', payload.info)
          this.set('status@loading', null)
          this.set('status@loadingBlock', null)
          break
        default:
          this.set('status', {
            loading: false,
            loadingBlock: false,
            error: null,
            success: null,
            warning: null,
            info: null,
            message: null,
          })
      }
    }
  },

  triggerNotification({ commit }, payload) {
    var options = {
      position: 'top-center',
      timeout: 3000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgressBar: false,
      closeButton: 'button',
      icon: true,
      rtl: false,
    }

    switch (payload.type) {
      case 'default':
        Vue.$toast(payload.message, options)
        break
      case 'success':
        Vue.$toast.success(payload.message, options)
        break
      case 'info':
        Vue.$toast.info(payload.message, options)
        break
      case 'warning':
        Vue.$toast.warning(payload.message, options)
        break
      case 'error':
        Vue.$toast.error(payload.message, options)
        break
      default:
        break
    }
  },

  ...make.actions(state),
}

const getters = make.getters(state)

export default new Vuex.Store({
  namespaced: true,
  name: 'global',
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
    user,
    system,
    xpert,
    account,
    global,
    talent,
    academy,
    bit,
    storm,
  },
  plugins: [
    pathify.plugin,
    createPersistedState(),
    // activate this for production
    // {
    //   storage: {
    //     getItem: (key) => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: (key) => ls.remove(key),
    //   },
    // }
  ],
})
