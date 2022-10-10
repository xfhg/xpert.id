/* eslint-disable no-unused-vars */

import store from '@/store'

import router from '@/router/index'

import { firestoreAction } from 'vuexfire'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage, functions } from '@/plugins/firebase'

var stormCreate = functions.httpsCallable('stormCreate')
var stormList = functions.httpsCallable('stormList')

import _ from 'lodash'

// import deepmerge from 'deepmerge'

const state = {
  data: {},
  charge: {}, // to load the active storm
  storms: [], //to load my storm list
  instances: [], //to load storm instances
  sis: '', // the id of the active storm (for charge) - the instance/identity
  sid: '', // stormCode not the identity
}

const actions = {
  bindData: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'data',
      db.collection('storms/').doc(firebase.auth().currentUser.uid),
      { reset: false }
    )
  }),

  async createStormAction({ commit }, payload) {
    const result = await stormCreate(payload)
    console.log(result)
    return result
  },

  async listStorms({ commit }, payload) {
    const result = await stormList({})

    store.set('storm/storms', result)
    return result
  },

  // TODO COMPOSE THE CORRECT MERGE OF THIS DATA
  // my storm
  async loadStorm({ commit }, payload) {
    // verificar se estou incluido
    // verificar se sou blue ou red
    // preparar edicao se for blue

    //! cleanup first
    store.set('storm/charge', {})
    store.set('global/storm', {})
    store.set('storm/sis', null)
    store.set('storm/sid', null)
    store.set('storm/instances', [])

    var result = {}

    if (payload.stormIdentity) {
      const loaded_storm = await db
        .collection('xstorms')
        .doc(payload.stormCode)
        .collection('bouts')
        .doc(payload.stormIdentity)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            if (doc.data().blue == firebase.auth().currentUser.uid) {
              store.set('storm/charge', doc.data())
            }
            store.set('global/storm', doc.data())
            store.set('storm/sid', payload.stormCode)
            store.set('storm/sis', payload.stormIdentity)
            return true
          } else {
            return { error: true }
          }
        })
        .catch(function (error) {
          console.log(error)
          return { error: true }
        })
      result.storm = loaded_storm
    } else {
      const loaded_storms = await db
        .collection('xstorms')
        .doc(payload.stormCode)
        .collection('bouts')
        .get()
        .catch(function (error) {
          console.log(error)
          return { error: true }
        })
      store.set('storm/sis', null)
      store.set('storm/sid', payload.stormCode)
      var storm_list_filtered = []
      loaded_storms.forEach((doc) => {
        storm_list_filtered.push(
          _.pick(doc.data(), [
            'time_created',
            'sid',
            'red',
            'bit',
            'start',
            'end',
            'accepted',
            'reviewed',
            'instance',
            'xperts',
          ])
        )
      })

      store.set('storm/instances', storm_list_filtered)
      result.bouts = storm_list_filtered
    }
    console.log(result)
    return result
  },

  resetStormStoreAction({ commit }, payload) {
    store.set('storm/data', {})
    store.set('storm/charge', {})
    store.set('global/storm', {})
    store.set('storm/sis', null)
    store.set('storm/sid', null)
    store.set('storm/instances', [])
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
