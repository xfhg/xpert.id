/* eslint-disable no-unused-vars */

import store from '@/store'

import { firestoreAction } from 'vuexfire'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage, functions } from '@/plugins/firebase'

import deepmerge from 'deepmerge'

const state = {
  data: {},
}

const actions = {
  bindData: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'data',
      db.collection('academy/').doc(firebase.auth().currentUser.uid),
      { reset: false }
    )
  }),
  async backendUpstreamUpdateAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: false,
      loading: true,
      background: payload.background,
    })
    await db
      .collection(payload.collection)
      .doc(firebase.auth().currentUser.uid)
      .set(payload.data, { merge: true })
      .then(function () {
        store.set(
          'academy/data',
          deepmerge(store.get('academy/data'), payload.data, {
            arrayMerge: (destination, source) => {
              return [...source]
            },
          })
        )

        store.dispatch('updateGlobalStatus', {
          clean: false,
          loading: false,
        })
        console.log('Backend DB updated')
      })
      .catch(function (error) {
        store.dispatch('updateGlobalStatus', {
          error: error,
          type: 'error',
          message: error,
          loading: false,
        })
        console.error('Error updating settings: ', error)
      })
  },

  async updatePublicDataAction({ commit }, payload) {
    var updated = {}
    updated[payload.path] = payload.data
    await db
      .collection(payload.collection)
      .doc(firebase.auth().currentUser.uid)
      .set(updated, { merge: true })
      .then(function () {
        console.log('xpublic data updated')
      })
      .catch(function (error) {
        console.error('Error updating settings: ', error)
      })
  },

  // ----------------------------------------------------------------
  // OFFLINE STATE SAVE ---------------------------------------------
  //
  async backendOfflineUpdateAction({ commit }, payload) {
    if (payload.data) {
      store.dispatch('updateGlobalStatus', {
        clean: false,
        loading: true,
      })

      if (payload.replace) {
        store.set('academy/data@' + payload.target, payload.data)
      } else {
        store.set(
          'academy/data',
          deepmerge(store.get('academy/data'), payload.data, {
            arrayMerge: (destination, source) => {
              return [...source]
            },
          })
        )
      }

      store.set('user/data@backendInSync', false)
      store.set('user/data@backendInSyncAcademy', false)

      store.dispatch('updateGlobalStatus', {
        clean: false,
        loading: false,
      })
      // Require direct backend update
      if (payload.direct) {
        store.dispatch('system/backendSyncWait').then(() => {
          console.log('Direct backend update completed')
        })
      }
    }
  },
  resetAcademyStoreAction({ commit }, payload) {
    store.set('academy/data', {})
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
