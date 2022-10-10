/* eslint-disable no-unused-vars */

// TODO this module is for all public data gathered from SQL
// TODO it is the global per user cache to avoid mixing it with system.js

import store from '@/store'

import { make, call, get } from 'vuex-pathify'

const state = {
  xpert: {}, // loading 3rd party xpert profile
  bit: {}, // loading 3rd party bit
  storm: {}, // loading 3rd party storm
  offer: {}, // loading 3rd party offer
  cache: {},
}

const actions = {
  resetGlobalStoreAction({ commit }, payload) {
    store.set('global/xpert', {})
    store.set('global/bit', {})
  },

  ...make.actions(state),
}

const mutations = {
  ...make.mutations(state),
}

const getters = {
  ...make.getters(state),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

/* eslint-enable */
