/* eslint-disable no-unused-vars */

import router from '@/router/index'
import store from '@/store'

import { firestoreAction } from 'vuexfire'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage, functions } from '@/plugins/firebase'

import deepmerge from 'deepmerge'

import _ from 'lodash'

// serverless functions

// TODO

// ! ACTIVE :
var xpertCheckUsername = functions.httpsCallable('xpertCheckUsername')
var xpertCheckInvite = functions.httpsCallable('xpertCheckInvite')
var xpertGetPublicProfile = functions.httpsCallable('xpertGetPublicProfile')
var xpertInviteRequest = functions.httpsCallable('xpertInviteRequest')
var xpertFeedback = functions.httpsCallable('xpertFeedback')

const state = {
  data: {
    profile: {
      displayPicture: '',
      displayName: '',
      bio: '',
      currentRole: '',
      currentCompany: {},
      currentCompanyObject: [],
      location: {},

      sectors: [],
      timezone: {},
    },
    education: [],
    employment: [],
    experience: [],
    skillset: [],
    portfolio: [],
    socials: [],
    bookshelf: [],
    interests: [],
  },
}

const actions = {
  // ----------------------------------------------------------------
  // BACKEND ACTIONS AND STATE UPDATE -------------------------------
  bindData: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'data',
      db.collection('xperts/').doc(firebase.auth().currentUser.uid),
      { reset: false }
    )
  }),
  async backendUpstreamUpdateAction({ commit }, payload) {
    if (payload.data) {
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
            'xpert/data',
            deepmerge(store.get('xpert/data'), payload.data, {
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
    }
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
  // ---------------------------------------------------------------

  // //todo
  // async xpertSetPublicData({ commit }, payload) {
  //   return xpertSetPublicData({})
  // },
  // //todo
  // async xpertGetPublicProfileNonAuth({ commit }, payload) {
  //   const result = await xpertGetPublicProfileNonAuth({
  //     username: payload.username,
  //   })
  //   return result
  // },

  //todo review
  async xpertGetPublicProfile({ commit }, payload) {
    var cache = await store.get('global/cache')

    payload.username = _.trim(_.toLower(payload.username))

    if (cache[payload.username]) {
      payload.cache = true
      payload.uid = cache[payload.username]
    } else {
      payload.cache = false
      payload.uid = 0
    }

    const result = await xpertGetPublicProfile({
      username: payload.username,
      cache: payload.cache,
      uid: payload.uid,
    })
    if (result.error) {
      return result
    } else {
      store.set('global/xpert', {})
      store.set('global/xpert', result.data)
      cache[payload.username] = result.data.uid
      store.set('global/cache', cache)
      return result
    }
  },

  async xpertCheckInvite({ commit }, payload) {
    const result = await xpertCheckInvite({
      invite: payload.invite,
    })
    return result
  },
  async xpertCheckUsername({ commit }, payload) {
    const result = await xpertCheckUsername({
      invite: payload.invite,
    })
    return result
  },
  async xpertInvitePitch({ commit }, payload) {
    const result = await xpertInviteRequest(payload.data)
    return result
  },
  // ----------------------------------------------------------------
  // OFFLINE STATE SAVE ---------------------------------------------
  //
  async backendOfflineUpdateAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: false,
      loading: true,
    })

    if (payload.replace) {
      store.set('xpert/data@' + payload.target, payload.data)
    } else {
      store.set(
        'xpert/data',
        deepmerge(store.get('xpert/data'), payload.data, {
          arrayMerge: (destination, source) => {
            return [...source]
          },
        })
      )
    }

    store.set('user/data@backendInSync', false)
    store.set('user/data@backendInSyncXperts', false)

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
  },

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  resetXpertStoreAction({ commit }, payload) {
    store.set('xpert/data', {})
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
