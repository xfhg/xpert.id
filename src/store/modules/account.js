/* eslint-disable no-unused-vars */

import router from '@/router/index'
import store from '@/store'

import { make, call, get } from 'vuex-pathify'

import { firebase, db, storage } from '@/plugins/firebase'

// import { loadStripe } from '@stripe/stripe-js'

import ninja from 'lodash'
import deepmerge from 'deepmerge'

const state = {
  data: {
    sub: '',
  },
}

const actions = {
  // async getAccountSubscription({ commit }, payload) {
  //   await firebase.auth().currentUser.getIdToken(true)
  //   const decodedToken = await firebase.auth().currentUser.getIdTokenResult()
  //   store.set('account/data@sub', decodedToken.claims.stripeRole)
  //   console.log(decodedToken.claims.stripeRole)
  // },

  // listProducts({ commit }, payload) {
  //   db.collection('products')
  //     .where('active', '==', true)
  //     .get()
  //     .then(function (querySnapshot) {
  //       querySnapshot.forEach(async function (doc) {
  //         console.log(doc.id, ' => ', doc.data())
  //         const priceSnap = await doc.ref.collection('prices').get()
  //         priceSnap.docs.forEach((doc) => {
  //           console.log(doc.id, ' => ', doc.data())
  //         })
  //       })
  //     })
  // },
  // async subscribePioneer({ commit }, payload) {
  //   const docRef = await db
  //     .collection('customers')
  //     .doc(firebase.auth().currentUser.uid)
  //     .collection('checkout_sessions')
  //     .add({
  //       price: 'price_1HhbQ2Bv7rxHxRRdZ7SlAbPE',
  //       allow_promotion_codes: true,
  //       success_url: window.location.origin,
  //       cancel_url: window.location.origin,
  //     })
  //   docRef.onSnapshot(async (snap) => {
  //     const { error, sessionId } = snap.data()
  //     if (error) {
  //       // Show an error to your customer and
  //       // inspect your Cloud Function logs in the Firebase console.
  //       alert(`An error occured: ${error.message}`)
  //     }
  //     if (sessionId) {
  //       // We have a session, let's redirect to Checkout
  //       // Init Stripe
  //       loadStripe.setLoadParameters({ advancedFraudSignals: false })
  //       const stripe = await loadStripe(
  //         'pk_test_51Hhb0eBv7rxHxRRd4aoT2O0CIqqJWXq0IBRsO5qkptQ0MH4OjZsJtEMuyHkzdCi67eHHCCCMS386ZhEl92GNrxbs00SWNimkOs'
  //       )
  //       stripe.redirectToCheckout({ sessionId })
  //     }
  //   })
  // },
  // async subscribeAmbassador({ commit }, payload) {
  //   const docRef = await db
  //     .collection('customers')
  //     .doc(firebase.auth().currentUser.uid)
  //     .collection('checkout_sessions')
  //     .add({
  //       price: 'price_1HhqMhBv7rxHxRRdH2RuNtPr',
  //       allow_promotion_codes: true,
  //       success_url: window.location.origin,
  //       cancel_url: window.location.origin,
  //     })
  //   docRef.onSnapshot(async (snap) => {
  //     const { error, sessionId } = snap.data()
  //     if (error) {
  //       // Show an error to your customer and
  //       // inspect your Cloud Function logs in the Firebase console.
  //       alert(`An error occured: ${error.message}`)
  //     }
  //     if (sessionId) {
  //       // We have a session, let's redirect to Checkout
  //       // Init Stripe
  //       loadStripe.setLoadParameters({ advancedFraudSignals: false })
  //       const stripe = await loadStripe(
  //         'pk_test_51Hhb0eBv7rxHxRRd4aoT2O0CIqqJWXq0IBRsO5qkptQ0MH4OjZsJtEMuyHkzdCi67eHHCCCMS386ZhEl92GNrxbs00SWNimkOs'
  //       )
  //       stripe.redirectToCheckout({ sessionId })
  //     }
  //   })
  // },

  // async accountDashboard({ commit }, payload) {
  //   const functionRef = firebase
  //     .app()
  //     .functions('europe-west2')
  //     .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink')
  //   const { data } = await functionRef({ returnUrl: window.location.origin })
  //   window.location.assign(data.url)
  // },
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
