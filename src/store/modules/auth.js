/* eslint-disable no-unused-vars */

import router from '@/router/index'
import store from '@/store'

import { make, call, get } from 'vuex-pathify'

import { firebase, db } from '@/plugins/firebase'

var gprovider = new firebase.auth.GoogleAuthProvider()
var tprovider = new firebase.auth.TwitterAuthProvider()
var ghprovider = new firebase.auth.GithubAuthProvider()

const state = {
  email: null,
  emailVerified: null,
  redirect: null,
  uid: null,
  authenticated: false,
  jwt: null,
  time: null,
  clean: {
    talent: {
      search_jobs: false,
      search_talent: false,
      search_cofounders: false,
      citizenship: [],
      visa: [],
      sectors: [],
      contract_type: [],
      remote_level: [],
      career_path: [],
      seniority: [],
      salary_target: '',
      salary_rate: [],
      company_perks: [],
      timezones: [],
      languages: [],
    },
    xperts: {
      profile: {
        displayPicture: '',
        displayName: '',
        bio: '',
        seniority: {},
        currentRole: '',
        currentCompany: {},
        currentCompanyObject: [],
        location: {},
        industry: [],
        sectors: [],
        timezone: {},
        username: '',
      },
      education: [],
      employment: [],
      experience: [],
      skillset: [],
      featured: [],
      socials: [],
      bookshelf: [],
      assets: [],
      interests: [],
    },
    academy: {
      brainstorm_complex: [
        {},
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
        { hour_start: '', hour_end: '' },
      ],
    },
  },
}

const actions = {
  // START Firebase Integration ---------------------------------------------------------------------------
  async integrityBackendAction({ commit }, payload) {
    var secondsSinceEpoch = Math.round(Date.now() / 1000)
    console.log('Integrity Check')
    if (secondsSinceEpoch - store.get('auth/time') > 1800) {
      console.log('Refreshing Token')
      await store.dispatch('auth/getUserJWTAction', true)
    }
  },

  getUserInfoAction({ commit }, payload) {
    return firebase.auth().currentUser
  },

  async getUserJWTAction({ commit }, payload) {
    if (firebase.auth().currentUser) {
      await firebase
        .auth()
        .currentUser.getIdToken(payload)
        .then(function (idToken) {
          //
          console.log('getUserJWTAction')
          //

          var timeNow = Math.round(Date.now() / 1000)
          store.set('auth/jwt', idToken)
          store.set('auth/time', timeNow)
        })
        .catch(function (error) {
          store.dispatch('updateGlobalStatus', {
            error: error.code,
            type: 'error',
            message: error.message,
            loading: false,
          })
        })
    } else {
      store.dispatch('auth/signOutAction', false).then(() => {
        store.dispatch('pushRoute', 'login')
      })
    }
  },

  refreshUserJWTAction({ commit }, payload) {
    //
    console.log('refreshUserJWTAction')
    //
    store.dispatch('auth/getUserJWTAction', true)
  },

  signUpAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        // console.log('signUpAction')
        store.dispatch('auth/getUserJWTAction', false)
        store.dispatch('auth/setFoundations', {
          authenticated: true,
          emailVerified: response.user.emailVerified,
          email: response.user.email,
          uid: response.user.uid,
          onboardingName: payload.displayName,
          onboarded: false,
        })

        // update the firebase object
        response.user.updateProfile({
          displayName: payload.displayName,
        })

        // send email validation
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(function () {})
          .catch(function (error) {})
      })
      .catch((error) => {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  signInAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        store.set('auth/authenticated', true)
        // console.log('signInAction')
        store.dispatch('auth/getUserJWTAction', false)

        store
          .dispatch('auth/setAuthLoginDataAction', {
            authenticated: true,
            emailVerified: response.user.emailVerified,
            email: response.user.email,
            uid: response.user.uid,
          })
          .then(() => {
            // store.dispatch('user/getUserProfileAction', false)
            // store.dispatch('user/backendDownstreamUpdateAction', {
            //   collection: 'users',
            // })
          })
      })
      .catch((error) => {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  signInActionWithGoogle({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .signInWithPopup(gprovider)
      .then(function (response) {
        store.set('auth/authenticated', true)

        store.dispatch('auth/getUserJWTAction', false)

        store
          .dispatch('auth/setFoundations', {
            authenticated: true,
            emailVerified: response.user.emailVerified,
            email: response.user.email,
            uid: response.user.uid,
            onboardingName: response.user.displayName,
          })
          .then(() => {
            // store.dispatch('user/getUserProfileAction', false)
            // store.dispatch('user/backendDownstreamUpdateAction', {
            //   collection: 'users',
            // })
          })
      })
      .catch(function (error) {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  signInActionWithTwitter({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .signInWithPopup(tprovider)
      .then(function (response) {
        store.set('auth/authenticated', true)
        store.dispatch('auth/getUserJWTAction', false)
        store
          .dispatch('auth/setFoundations', {
            authenticated: true,
            emailVerified: response.user.emailVerified,
            email: response.user.email,
            uid: response.user.uid,
            onboardingName: response.user.displayName,
          })
          .then(() => {
            // store.dispatch('user/getUserProfileAction', false)
            // store.dispatch('user/backendDownstreamUpdateAction', {
            //   collection: 'users',
            // })
          })
      })
      .catch(function (error) {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  signInActionWithGithub({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .signInWithPopup(ghprovider)
      .then(function (response) {
        store.set('auth/authenticated', true)
        store.dispatch('auth/getUserJWTAction', false)
        store
          .dispatch('auth/setFoundations', {
            authenticated: true,
            emailVerified: response.user.emailVerified,
            email: response.user.email,
            uid: response.user.uid,
            onboardingName: response.user.displayName,
          })
          .then(() => {
            //store.dispatch('user/getUserProfileAction', false)
            // store.dispatch('user/backendDownstreamUpdateAction', {
            //   collection: 'users',
            // })
          })
      })
      .catch(function (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
          // User's email already exists.
          // The pending GitHub credential.
          var pendingCred = error.credential
          // The provider account's email address.
          var email = error.email
          // Get sign-in methods for this email.
          firebase
            .auth()
            .fetchSignInMethodsForEmail(email)
            .then(function (methods) {
              // If the user has several sign-in methods,
              // the first method in the list will be the "recommended" method to use.
              if (methods[0] === 'password') {
                // SEND MESSAGE SAYING TO USE EMAIL AND PASSWORD LOGIN
                store.dispatch('updateGlobalStatus', {
                  error: error.code,
                  type: 'error',
                  message:
                    'An account already exists with the same email address but different sign-in credentials. Sign in using email and password',
                  loading: false,
                })
              } else {
                // SEND MESSAGE SAYING TO USE THIS SOCIAL LOGIN
                store.dispatch('updateGlobalStatus', {
                  error: error.code,
                  type: 'error',
                  message:
                    'An account already exists with the same email address but different sign-in credentials. Sign in using ' +
                    methods[0] +
                    ' provider.',
                  loading: false,
                })
              }
            })
        } else {
          store.dispatch('updateGlobalStatus', {
            error: error.code,
            type: 'error',
            message: error.message,
            loading: false,
          })
        }
      })
  },

  signOutAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    store
      .dispatch('system/backendSyncWait', {})
      .then(function () {
        firebase
          .auth()
          .signOut()
          .then((response) => {
            // console.log('signOutAction')
            store.dispatch('updateGlobalStatus', {
              clean: true,
              loading: false,
            })

            store.set('auth/authenticated', false)

            store.set('auth/emailVerified', null)
            store.set('auth/email', null)
            store.set('auth/jwt', null)
            store.set('auth/time', null)
            store.set('auth/uid', null)
            store.set('auth/redirect', null)

            store.dispatch('user/resetUserStoreAction', {
              clean: true,
            })
            store.dispatch('xpert/resetXpertStoreAction', {
              clean: true,
            })
            store.dispatch('global/resetGlobalStoreAction', {
              clean: true,
            })
            store.dispatch('talent/resetTalentStoreAction', {
              clean: true,
            })
            store.dispatch('system/resetSystemStateAction', {
              clean: true,
            })
            localStorage.removeItem('vuex')
          })
          .catch((error) => {
            store.dispatch('updateGlobalStatus', {
              error: error.code,
              type: 'error',
              message: error.message,
              loading: false,
            })
          })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // For forced version updates where local cache needs a force refresh from backend
  signOutActionNoBackendSync({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
      block: true,
    })
    firebase
      .auth()
      .signOut()
      .then((response) => {
        // console.log('signOutAction')
        store.dispatch('updateGlobalStatus', {
          clean: true,
          loading: false,
        })

        store.set('auth/authenticated', false)

        store.set('auth/emailVerified', null)
        store.set('auth/email', null)
        store.set('auth/jwt', null)
        store.set('auth/time', null)
        store.set('auth/uid', null)
        store.set('auth/redirect', null)

        store.dispatch('user/resetUserStoreAction', {
          clean: true,
        })
        store.dispatch('xpert/resetXpertStoreAction', {
          clean: true,
        })
        store.dispatch('system/resetSystemStateAction', {
          clean: true,
        })
        localStorage.removeItem('vuex')
      })
      .catch((error) => {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  passwordResetAction({ commit }, payload) {
    store.dispatch('updateGlobalStatus', {
      clean: true,
      loading: true,
    })
    firebase
      .auth()
      .sendPasswordResetEmail(payload.email)
      .then(function () {
        store.dispatch('updateGlobalStatus', {
          info: 1,
          type: 'info',
          message: 'Password Reset link sent to your email.',
          loading: false,
        })
      })
      .catch(function (error) {
        store.dispatch('updateGlobalStatus', {
          error: error.code,
          type: 'error',
          message: error.message,
          loading: false,
        })
      })
  },

  // END Firebase Integration ---------------------------------------------------------------------------

  // START USER STAGE AND MAINTENANCE --------------------------------

  async setFoundations({ commit }, payload) {
    //
    // This timer checks if the user just signed up or its just a normal login
    if (
      Math.round(Date.now()) - firebase.auth().currentUser.metadata.a <
      5000
    ) {
      //
      console.log('setFoundations new user')
      //
      await store.dispatch('auth/setAuthFoundationsAction', payload)
    } else {
      //
      console.log('setFoundations returning user')
      //
      await store.dispatch('auth/setAuthLoginDataAction', payload)
    }
  },

  async setAuthFoundationsAction({ commit }, payload) {
    //
    console.log('setAuthFoundationsAction')
    //
    store.set('auth/authenticated', true)
    store.set('auth/emailVerified', payload.emailVerified)
    store.set('auth/email', payload.email)
    store.set('auth/uid', payload.uid)

    await store
      .dispatch('user/backendUpstreamUpdateAction', {
        data: {
          email: payload.email,
          onboarded: false,
          onboardingName: payload.onboardingName,
          locale: store.get('nonuser@locale'),
          avatar: '',
        },
        collection: 'users',
      })
      .then(function () {
        //ALL INITIALIZATIONS ON VUEX THAT BIND DATA TO FIRESTORE

        store.dispatch('talent/backendUpstreamUpdateAction', {
          data: store.get('auth/clean@talent'),
          collection: 'talent',
        })
        store.dispatch('academy/backendUpstreamUpdateAction', {
          data: store.get('auth/clean@academy'),
          collection: 'academy',
        })

        //Update Profile name from social logins
        var xpert = store.get('auth/clean@xperts')
        xpert.profile.displayName = payload.onboardingName
        xpert.profile.username = payload.uid.slice(0, 7).toLowerCase()

        store
          .dispatch('xpert/backendUpstreamUpdateAction', {
            data: xpert,
            collection: 'xperts',
          })
          .then(function () {
            console.log(' setAuthFoundationsAction completed')
            router.push('/onboarding')
          })
          .catch(function (error) {
            console.error('Error updating settings: ', error)
          })
      })
      .catch(function (error) {
        console.error('Error updating settings: ', error)
      })
  },

  async setAuthLoginDataAction({ commit }, payload) {
    //
    console.log('setAuthLoginDataAction')
    //
    store.set('auth/authenticated', true)
    store.set('auth/emailVerified', payload.emailVerified)
    store.set('auth/email', payload.email)
    store.set('auth/uid', payload.uid)

    //ALL INITIALIZATIONS ON VUEX THAT BIND DATA TO FIRESTORE
    //TODO
    await store.dispatch('xpert/bindData').then(function () {})
    await store.dispatch('talent/bindData').then(function () {})
    await store.dispatch('academy/bindData').then(function () {})
    await store
      .dispatch('user/bindData')

      .then(function () {
        //
        // setup user locale
        if (store.get('user/data@locale') != undefined) {
          store.set('nonuser@locale', store.get('user/data@locale'))
          store.dispatch('updateLocale', {
            locale: store.get('user/data@locale'),
          })
        } else {
          store.set('nonuser@locale', store.get('user/data@locale'))
          store.dispatch('updateLocale', { locale: 'en' })
        }

        var onboarded = store.get('user/data@onboarded')
        var redirect = store.get('auth/redirect')

        console.log(redirect)

        if (onboarded) {
          if (redirect) {
            router.push(redirect)
          } else {
            router.push('/dashboard')
          }
        } else {
          router.push('/onboarding')
        }
      })
  },

  // END USER STAGE AND MAINTENANCE ---------------------------------
  // ----------------------------------------------------------------

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
