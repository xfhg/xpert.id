/* eslint-disable no-unused-vars */

import router from '@/router/index'
import store from '@/store'

import xpert from '@/config/xpert'

import { make, call, get } from 'vuex-pathify'

import { firestoreAction } from 'vuexfire'

import { firebase, db, storage } from '@/plugins/firebase'

import _ from 'lodash'

import { buildCleaner, cleanObject, cleanString } from 'lodash-clean'

import { continents, countries, languages } from 'countries-list'

import slugify from 'slugify'

// default
// const options = {
//   isArray: _.identity,
//   isBoolean: _.identity,
//   isDate: _.identity,
//   isFunction: _.noop,
//   isNull: _.identity,
//   isPlainObject: cleanObject,
//   isString: cleanString,
//   isUndefined: _.noop,
// }

const options = {
  isArray: _.identity,
  isBoolean: _.identity,
  isDate: _.identity,
  isFunction: cleanObject,
  isNull: cleanObject,
  isPlainObject: cleanObject,
  isString: cleanString,
  isUndefined: cleanObject,
}
const clean = buildCleaner(options)

const state = {
  version: xpert.version,
  /* core system that is populated from firestore*/
  data: {},

  /* the code generated fields */
  countries: _.values(countries),
  regions: _.values(continents),
  languages: _.values(languages),

  //TODO CLEAN :
  temp: {},
  xbits: {},
}

const actions = {
  bindData: firestoreAction(async ({ bindFirestoreRef }) => {
    //check if version was not outdated
    const sysBackbone = db.collection('system/').doc(xpert.version)
    const data = await sysBackbone.get()
    if (!data.exists) {
      console.log('core data needs update')
      router.push('/update/' + xpert.version)
    } else {
      console.log('core data sync')
      return bindFirestoreRef(
        'data',
        db.collection('system/').doc(xpert.version),
        { reset: true }
      )
    }
  }),
  unbindData: firestoreAction(({ state, unbindFirestoreRef }) => {
    //unbindFirestoreRef('todos', true)
    // state.todos === []
    unbindFirestoreRef('data', false)
    // maintain state
  }),

  // ------------------------------------------------------------------
  async checkSession({ commit }, payload) {
    // TODO send notification

    console.log('checkSession if active')
    var secondsSinceEpoch = Math.round(Date.now() / 1000)
    if (store.get('auth/authenticated')) {
      if (
        store.get('auth/jwt') == null ||
        secondsSinceEpoch - store.get('auth/time') > 3600
      ) {
        console.log('checkSession - session expired')
        store.set('auth/authenticated', null)
        store.dispatch('auth/signOutActionNoBackendSync')
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  },
  ///
  backendSync({ commit }, payload) {
    if (firebase.auth().currentUser && store.get('user/data@onboarded')) {
      if (!store.get('user/data@backendInSync')) {
        //
        console.log('backend not in sync - updating')

        if (!store.get('user/data@backendInSyncXperts')) {
          console.log('backend not in sync - xperts updating')
          // console.log(clean(store.get('xpert/data')))
          store
            .dispatch('xpert/backendUpstreamUpdateAction', {
              data: clean(store.get('xpert/data')),
              collection: 'xperts',
              background: payload.background,
            })
            .then(function () {
              store.set('user/data@backendInSyncXperts', true)
              if (
                store.get('user/data@backendInSyncXperts') &&
                store.get('user/data@backendInSyncUsers') &&
                store.get('user/data@backendInSyncTalent')
              ) {
                store.set('user/data@backendInSync', true)
              }
            })
            .catch(function (error) {
              store.set('user/data@backendInSyncXperts', false)
              store.set('user/data@backendInSync', false)
              console.log(error)
              store.dispatch('updateGlobalStatus', {
                error: error,
                type: 'error',
                message: error,
                loading: false,
              })
            })
        }

        //
        if (!store.get('user/data@backendInSyncUsers')) {
          console.log('backend not in sync - users updating')

          // console.log(clean(store.get('user/data')))
          store
            .dispatch('user/backendUpstreamUpdateAction', {
              data: clean(store.get('user/data')),
              collection: 'users',
              background: payload.background,
            })
            .then(function () {
              store.set('user/data@backendInSyncUsers', true)
              if (
                store.get('user/data@backendInSyncXperts') &&
                store.get('user/data@backendInSyncUsers') &&
                store.get('user/data@backendInSyncTalent')
              ) {
                store.set('user/data@backendInSync', true)
              }
            })
            .catch(function (error) {
              store.set('user/data@backendInSyncUsers', false)
              store.set('user/data@backendInSync', false)
              console.log(error)
              store.dispatch('updateGlobalStatus', {
                error: error,
                type: 'error',
                message: error,
                loading: false,
              })
            })
        }

        if (!store.get('user/data@backendInSyncTalent')) {
          console.log('backend not in sync - talent updating')
          if (clean(store.get('talent/data'))) {
            store
              .dispatch('talent/backendUpstreamUpdateAction', {
                data: clean(store.get('talent/data')),
                collection: 'talent',
                background: payload.background,
              })
              .then(function () {
                store.set('user/data@backendInSyncTalent', true)
                if (
                  store.get('user/data@backendInSyncXperts') &&
                  store.get('user/data@backendInSyncUsers') &&
                  store.get('user/data@backendInSyncTalent')
                ) {
                  store.set('user/data@backendInSync', true)
                }
              })
              .catch(function (error) {
                store.set('user/data@backendInSyncTalent', false)
                store.set('user/data@backendInSync', false)
                console.log(error)
                store.dispatch('updateGlobalStatus', {
                  error: error,
                  type: 'error',
                  message: error,
                  loading: false,
                })
              })
          }
        }
      } else {
        console.log('backend in sync - no update')
      }
    }
  },

  async backendSyncWait({ commit }, payload) {
    if (store.get('user/data@onboarded')) {
      if (!store.get('user/data@backendInSync')) {
        //
        console.log('backend not in sync - updating')

        if (!store.get('user/data@backendInSyncXperts')) {
          // console.log(clean(store.get('xpert/data')))
          await store
            .dispatch('xpert/backendUpstreamUpdateAction', {
              data: clean(store.get('xpert/data')),
              collection: 'xperts',
            })
            .then(function () {
              store.set('user/data@backendInSyncXperts', true)
              if (
                store.get('user/data@backendInSyncXperts') &&
                store.get('user/data@backendInSyncUsers') &&
                store.get('user/data@backendInSyncTalent')
              ) {
                store.set('user/data@backendInSync', true)
              }
            })
            .catch(function (error) {
              store.set('user/data@backendInSyncXperts', false)
              store.set('user/data@backendInSync', false)
              console.log(error)
              store.dispatch('updateGlobalStatus', {
                error: error,
                type: 'error',
                message: error,
                loading: false,
              })
            })
        }

        if (!store.get('user/data@backendInSyncUsers')) {
          // console.log(clean(store.get('user/data')))
          await store
            .dispatch('user/backendUpstreamUpdateAction', {
              data: clean(store.get('user/data')),
              collection: 'users',
            })
            .then(function () {
              store.set('user/data@backendInSyncUsers', true)
              if (
                store.get('user/data@backendInSyncXperts') &&
                store.get('user/data@backendInSyncUsers') &&
                store.get('user/data@backendInSyncTalent')
              ) {
                store.set('user/data@backendInSync', true)
              }
            })
            .catch(function (error) {
              store.set('user/data@backendInSyncUsers', false)
              store.set('user/data@backendInSync', false)
              console.log(error)
              store.dispatch('updateGlobalStatus', {
                error: error,
                type: 'error',
                message: error,
                loading: false,
              })
            })
        }

        if (!store.get('user/data@backendInSyncTalent')) {
          console.log(clean(store.get('talent/data')))
          if (clean(store.get('talent/data'))) {
            await store
              .dispatch('talent/backendUpstreamUpdateAction', {
                data: clean(store.get('talent/data')),
                collection: 'talent',
              })
              .then(function () {
                store.set('user/data@backendInSyncTalent', true)
                if (
                  store.get('user/data@backendInSyncXperts') &&
                  store.get('user/data@backendInSyncUsers') &&
                  store.get('user/data@backendInSyncTalent')
                ) {
                  store.set('user/data@backendInSync', true)
                }
              })
              .catch(function (error) {
                store.set('user/data@backendInSyncTalent', false)
                store.set('user/data@backendInSync', false)
                console.log(error)
                store.dispatch('updateGlobalStatus', {
                  error: error,
                  type: 'error',
                  message: error,
                  loading: false,
                })
              })
          }
        }
      } else {
        console.log('backend in sync - no update')
      }
    }
  },

  resetSystemStateAction() {
    console.log('reseting state')
    //
    // bind unbind is the solution
    //
    // Object.assign(this.state, getDefaultState())
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
