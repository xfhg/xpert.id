/* eslint-disable no-unused-vars */

import store from '@/store'

import router from '@/router/index'

import { firestoreAction } from 'vuexfire'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage, functions, realtime } from '@/plugins/firebase'

import { decompressFromUTF16 as lzdecompress } from 'lz-string'

import deepmerge from 'deepmerge'

var bitCreate = functions.httpsCallable('bitCreate')
var bitSave = functions.httpsCallable('bitSave')
var bitList = functions.httpsCallable('bitList')
var bitOthers = functions.httpsCallable('bitOthers')

const state = {
  data: {},
  brain: {}, // to load my active bit
  bits: [], // to load my bit list
  hashtags: [], // for organization purposes
  wip: '', // the id of the active bit (for brain)
}

const actions = {
  bindData: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'data',
      db.collection('bits/').doc(firebase.auth().currentUser.uid),
      { reset: false }
    )
  }),

  async bitCreate({ commit }, payload) {
    const result = await bitCreate({
      content: payload.content,
      deadline: payload.deadline,
      owner: payload.owner,
    })
    store.set('bit/wip', result.data)
    router.push('/brain/' + result.data)
    return result
  },

  async bitSave({ commit }, payload) {
    const result = await bitSave({
      content: payload.content,
      bitcode: payload.bitcode,
    })
    store.set('bit/wip', result.data.id)

    return result
  },

  async loadXbit({ commit }, payload) {
    const loaded_bit = await db
      .collection('bits')
      .doc(firebase.auth().currentUser.uid)
      .collection('k')
      .doc(payload.bitcode)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          store.set('bit/brain', doc.data())
          store.set('global/bit', doc.data())
          store.set('bit/wip', payload.bitcode)
          return true
        } else {
          return { error: true }
        }
      })
      .catch(function (error) {
        console.log(error)
        return { error: true }
      })

    const loaded_bit_storms = await db
      .collection('bits')
      .doc(firebase.auth().currentUser.uid)
      .collection('k')
      .doc(payload.bitcode)
      .collection('brainstorms')
      .get()
      .then(function (snap) {
        return snap
      })
      .catch(function (error) {
        console.log(error)
        return { error: true }
      })

    var accepted_storm_list = []
    loaded_bit_storms.forEach((doc) => {
      if (doc.data().accepted) {
        accepted_storm_list.push(doc.data())
      }
    })
    store.set('bit/brain@brainstorms', accepted_storm_list)

    return loaded_bit
  },

  async loadXbitPublic({ commit }, payload) {
    const loaded_bit = await db
      .collection('xbits')
      .doc(payload.bitcode)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          store.set('global/bit', doc.data())
          store.set('global/bit@data', lzdecompress(doc.data().data))
          return { error: false, owner: doc.data().owner }
        } else {
          return { error: true }
        }
      })
      .catch(function (error) {
        console.log(error)
        return { error: true }
      })

    if (!loaded_bit.error) {
      const xpublic = await db
        .collection('xpublic')
        .doc(loaded_bit.owner)
        .get()
        .then(function (xp) {
          if (xp.exists) {
            store.set('global/bit@xpert', xp.data())
            return true
          } else {
            return { error: true }
          }
        })
        .catch(function (error) {
          console.log(error)
          return { error: true }
        })

      return xpublic
    }

    return loaded_bit
  },

  async listXbit({ commit }, payload) {
    const result = await bitList({})

    store.set('bit/bits', result)
    return result
  },

  async getXbits({ commit }, payload) {
    const result = await bitOthers({})
    return result
  },

  // -------------------------------------------------- realtime lab

  async flameAction({ commit }, payload) {
    console.log('flameeeeee')

    // const updates = {}
    // updates['flame/' + firebase.auth().currentUser.uid + '/ganso'] = true
    // updates['flame/' + firebase.auth().currentUser.uid + '/ganso_click'] =
    //   realtime.ServerValue.increment(1)
    // updates['flame/' + firebase.auth().currentUser.uid + '/pato'] = true
    // updates['flame/' + firebase.auth().currentUser.uid + '/pato_click'] =
    //   realtime.ServerValue.increment(1)

    // realtime
    //   .ref()
    //   .update(updates)
    //   .then(() => {
    //     return true
    //   })

    var flameRef = realtime
      .ref('flame/' + firebase.auth().currentUser.uid + '/pato')
      .transaction((post) => {
        if (post) {
          if (post.stars && post.stars[9]) {
            post.starCount--
            post.stars[9] = null
          } else {
            post.starCount++
            if (!post.stars) {
              post.stars = {}
            }
            post.stars[9] = true
          }
        }
        return post
      })
    await realtime.ref().update(flameRef)
  },

  // ----------------------------------------------------

  async backendUpstreamUpdateAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: false,
      loading: true,
      background: payload.background,
    })
  },

  resetBitStoreAction({ commit }, payload) {
    store.set('bit/data', {})
    store.set('bit/brain', {})
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
