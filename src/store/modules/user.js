/* eslint-disable no-unused-vars */

import router from '@/router/index'

import { firestoreAction } from 'vuexfire'

import store from '@/store'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage, functions } from '@/plugins/firebase'

// import apiLinkPreview from '@/axios/api-link-preview'

import ninja from 'lodash'
import deepmerge from 'deepmerge'

//TODO MOVE THIS OUT
var linkMetadata = functions.httpsCallable('linkMetadata')

const state = {
  data: {
    onboarded: false,
    onboardingName: '',
    email: '',
    email_verified: '',
    avatar: '',
    locale: 'en',
    username: '',
    invite: '',
    invitedby: '',
    backendInSync: true,
    backendInSyncUsers: true,
    backendInSyncXperts: true,
    backendInSyncTalent: true,
    backendInSyncAcademy: true,
    privacy: [],
    intent: [],
  },
  // TODO : Downstream from firebase
  notifications: [],
}

const actions = {
  bindNotifications: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'notifications',
      db.collection('notifications/').doc(firebase.auth().currentUser.uid)
    )
  }),
  bindData: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'data',
      db.collection('users/').doc(firebase.auth().currentUser.uid),
      { reset: false }
    )
  }),
  // ----------------------------------------------------------------
  // Check Link Preview for Featured and Portfolio Links
  async checkLinkPreview({ commit }, payload) {
    return linkMetadata({ url: payload })
  },

  // ----------------------------------------------------------------
  // BACKEND ACTIONS AND STATE UPDATE -------------------------------

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
          console.log('backendUpstreamUpdateAction')

          // store.set(
          //   'user/data',
          //   ninja.merge({}, store.get('user/data'), payload.data)
          // )

          // console.log(JSON.stringify(store.get('user/data')))
          // console.log(payload.data)
          // console.log(
          //   JSON.stringify(
          //     deepmerge(store.get('user/data'), payload.data, {
          //       arrayMerge: (destination, source) => {
          //         return [...source]
          //       },
          //     })
          //   )
          // )

          store.set(
            'user/data',
            deepmerge(store.get('user/data'), payload.data, {
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

  // ----------------------------------------------------------------
  // OFFLINE STATE SAVE ---------------------------------------------
  //
  async backendOfflineUpdateAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: false,
      loading: true,
    })

    // store.set(
    //   'user/data',
    //   ninja.merge(
    //     { backendInSync: false },
    //     store.get('user/data'),
    //     payload.data
    //   )
    // )

    store.set(
      'user/data',
      deepmerge(store.get('user/data'), payload.data, {
        arrayMerge: (destination, source) => {
          return [...source]
        },
      })
    )
    store.set('user/data@backendInSync', false)
    store.set('user/data@backendInSyncUsers', false)

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

  // DISCONNECT THIS TWO AND USE THE BACKEND DISPATCH
  uploadProfilePictureAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
    })

    var storageRef = storage.ref(
      firebase.auth().currentUser.uid + '/profilePicture/' + payload.file.name
    )

    storageRef.put(payload.file).then(function (snapshot) {
      store.dispatch('updateGlobalStatus', {
        loading: false,
        clean: true,
      })
      storageRef.getDownloadURL().then(function (url) {
        //
        //store.set('user/settings@avatar', url)
        //store.dispatch('user/setUserProfilePicAction', { url: url })

        store.dispatch('user/backendUpstreamUpdateAction', {
          data: { avatar: url },
          collection: 'users',
        })

        store.dispatch('xpert/backendUpstreamUpdateAction', {
          data: { profile: { displayPicture: url } },
          collection: 'xperts',
        })
      })
    })
  },

  // --------------------------------------------------------------------------------

  setUserLocaleAction({ commit }, payload) {
    firebase.auth().languageCode = payload.locale

    if (firebase.auth().currentUser) {
      //
      // firebase.auth().useDeviceLanguage();
      // store.set('user/settings@locale', payload.locale)
      store.set('nonuser@locale', payload.locale)
      store.dispatch('updateLocale', payload)
      //

      store.dispatch('user/backendUpstreamUpdateAction', {
        data: { locale: payload.locale },
        collection: 'users',
      })
      //
    } else {
      //
      store.set('nonuser@locale', payload.locale)
    }
  },

  // ----------------------------------------------------------------
  // LOGOUT CLEAN UP -------------------------------

  resetUserStoreAction({ commit }, payload) {
    store.set('user/notifications', {})

    store.set('user/data', {})
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
