import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Dashboard from '@/views/user/Dashboard'

import store from '@/store'
// import _ from 'lodash'

import multiguard from 'vue-router-multiguard'
// import auth from '../store/modules/auth'

Vue.use(VueRouter)

// const delayRoute = async function (to, from, next) {
//   console.log('testParam guard')
//   console.log(to)

//   await new Promise((resolve) => setTimeout(() => resolve(), 5000))

//   next()
// }

const grabXbitList = async function (to, from, next) {
  try {
    const xbit_list = await store.dispatch('bit/listXbit', {})
    if (xbit_list.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}

const grabXbitPrivateData = async function (to, from, next) {
  try {
    const xbit_data = await store.dispatch('bit/loadXbit', {
      bitcode: to.params.bitcode,
    })
    if (xbit_data.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}

const grabXbitPublicData = async function (to, from, next) {
  try {
    const xbit_public_data = await store.dispatch('bit/loadXbitPublic', {
      bitcode: to.params.bitcode,
    })

    if (xbit_public_data.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}

const grabStormList = async function (to, from, next) {
  try {
    const storm_list = await store.dispatch('storm/listStorms', {})
    if (storm_list.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}
const grabStorm = async function (to, from, next) {
  try {
    const storm_data = await store.dispatch('storm/loadStorm', {
      stormCode: to.params.stormcode,
      stormIdentity: to.params.stormid,
    })
    if (storm_data.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}

const grabXpertPublicProfile = async function (to, from, next) {
  try {
    const profile_data = await store.dispatch('xpert/xpertGetPublicProfile', {
      username: to.params.username,
    })
    if (profile_data.error) {
      next({
        path: '/notfound',
      })
    } else {
      next()
    }
  } catch (e) {
    console.log(e)
    next({
      path: '/error',
    })
  }
}

// const grabPublicData = async function (to, from, next) {
//   try {
//     console.log(to.params)
//     const data = await store.dispatch('xpert/xpertGetPublicProfileNonAuth', {
//       uid: to.params.id,
//     })
//     console.log(data.data)
//     if (data.data.length > 0) {
//       store.set('xpertid/data', {})
//       store.set('xpertid/data', data.data[0].xpert_data)
//       next()
//     } else {
//       next({
//         path: '/notfound',
//       })
//     }
//   } catch (e) {
//     next({
//       path: '/error',
//     })
//   }
// }

const saveInvite = async function (to, from, next) {
  if (to.params.invite) {
    store.set('system/temp', { invite: to.params.invite })
  }
  next()
}

const requiresAuthenticated = function (to, from, next) {
  console.log('requiresAuth guard')
  var authTime = store.get('auth/time')
  var secondsSinceEpoch = Math.round(Date.now() / 1000)

  console.log(secondsSinceEpoch - authTime + ' of 86400')

  if (!store.get('auth/authenticated')) {
    store.set('auth/redirect', to.fullPath)
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  } else if (
    store.get('auth/jwt') == null ||
    secondsSinceEpoch - authTime > 86400
  ) {
    console.log('requiresAuth - session expired')
    store.dispatch('auth/signOutActionNoBackendSync')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  } else {
    next()
  }
}

const checkSession = async function (to, from, next) {
  // OLD function before moving to store/system
  //
  // console.log('checkSession guard')
  // var secondsSinceEpoch = Math.round(Date.now() / 1000)
  // if (store.get('auth/authenticated')) {
  //   if (
  //     store.get('auth/jwt') == null ||
  //     secondsSinceEpoch - store.get('auth/time') > 3600
  //   ) {
  //     console.log('checkSession - session expired')
  //     store.set('auth/authenticated', null)
  //     store.dispatch('auth/signOutActionNoBackendSync')
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath,
  //       },
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }

  console.log('checkSession guard')
  const session = await store.dispatch('system/checkSession')
  if (!session) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  } else {
    next()
  }
}

const requiresNotOnboarded = function (to, from, next) {
  console.log('requiresNotOnboarded guard')
  if (from.name == 'Dashboard') {
    next('/')
  } else if (store.get('user/data@onboarded')) {
    next({
      path: '/dashboard',
    })
  } else {
    next()
  }
}

const checkOnboarded = function (to, from, next) {
  console.log('checkOnboarded guard')
  if (from.name == 'Onboarding') {
    next()
  } else if (!store.get('user/data@onboarded')) {
    next({
      path: '/onboarding',
    })
  } else {
    next()
  }
}

const requiresBackend = function (to, from, next) {
  console.log('requiresBackend guard')
  store.dispatch('auth/integrityBackendAction').then(() => {
    next()
  })
}

const backendInSync = function (to, from, next) {
  console.log('syncBackend guard')
  store.dispatch('system/backendSync', {}).then(() => {
    store.set('user/data@backendInSync', true)
    next()
  })
}

const backendInSyncWait = function (to, from, next) {
  console.log('syncBackend guard')
  store.dispatch('system/backendSyncWait', {}).then(() => {
    store.set('user/data@backendInSync', true)
    next()
  })
}

const isLogout = function (to, from, next) {
  console.log('isLogout guard')
  if (store.get('auth/authenticated') == true) {
    store.dispatch('auth/signOutAction').then(() => {
      next()
    })
  } else {
    next({
      path: '/',
    })
  }
}

const requireGuest = function (to, from, next) {
  console.log('requiresGuest guard')
  if (store.get('auth/authenticated')) {
    next({
      path: '/' + 1337,
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: multiguard([checkSession]),
  },
  // ----------------------------------------------------------------------------------------- ERRORS
  {
    path: '/error',
    name: 'Error',
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Blank.vue'),
    beforeEnter: multiguard([checkSession]),
  },
  // ----------------------------------------------------------------------------------------- AUTH
  {
    path: '/login',
    name: 'Login',
    meta: {
      requiresGuest: true,
    },

    beforeEnter: multiguard([requireGuest]),
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/auth/Login.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      isLogout: true,
    },
    beforeEnter: multiguard([isLogout]),
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      requiresGuest: true,
    },
    beforeEnter: multiguard([requireGuest]),
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/auth/Register.vue'),
  },
  {
    path: '/invite/:invite',
    name: 'RegisterInvite',

    beforeEnter: multiguard([requireGuest, saveInvite]),
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/auth/Register.vue'),
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    meta: {
      requiresAuth: true,
      requiresBackend: true,
      isOnboarding: true,
    },
    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresNotOnboarded,
      requiresBackend,
    ]),
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/auth/Onboarding.vue'),
  },
  {
    path: '/update/:version',
    name: 'OutdatedVersion',
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/auth/Update.vue'),
    beforeEnter: multiguard([checkSession]),
  },

  // {
  //   path: '/boilerplate',
  //   name: 'Boilerplate',

  //   beforeEnter: multiguard([requiresAuthenticated, backendInSync]),
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "legacy" */ '@/views/_legacy/Boilerplate.vue'
  //     ),
  // },
  // {
  //   path: '/editor',
  //   name: 'Editor',

  //   beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
  //   component: () =>
  //     import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Editor.vue'),
  // },
  // ----------------------------------------------------------------------------------------- DASHBOARD

  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
      requiresBackend: true,
    },
    beforeEnter: multiguard([
      requiresAuthenticated,
      checkOnboarded,
      requiresBackend,
      backendInSync,
    ]),
    component: Dashboard,
  },

  // ----------------------------------------------------------------------------------------- XPERT PROFILE
  {
    path: '/profile',
    name: 'Public',
    beforeEnter: multiguard([
      requiresAuthenticated,
      checkOnboarded,
      requiresBackend,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/xpert/Profile.vue'),
  },
  {
    path: '/profile/public',
    name: 'ProfilePublic',
    meta: {
      requiresAuth: true,
      requiresBackend: true,
    },
    beforeEnter: multiguard([
      requiresAuthenticated,
      checkOnboarded,
      requiresBackend,
      backendInSync,
    ]),

    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/xpert/Public.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/user/Settings.vue'),
  },

  {
    path: '/start',
    name: 'JoinNetwork',

    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresBackend,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/academy/Start.vue'),
  },
  {
    path: '/join/academy',
    name: 'JoinAcademy',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/academy/Join.vue'),
  },
  {
    path: '/join/talent',
    name: 'JoinTalent',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/talent/Join.vue'),
  },

  // ----------------------------------------------------------------------------------------- BIT ROUTES

  {
    path: '/create',
    name: 'CreateBit',

    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresBackend,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/xbits/Create.vue'),
  },
  {
    path: '/bit/:bitcode',
    name: 'BitDetail',

    beforeEnter: multiguard([
      requiresAuthenticated,
      backendInSyncWait,
      grabXbitPublicData,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/xbits/Public.vue'),
  },
  {
    path: '/brain/:bitcode',
    name: 'BrainSandbox',

    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresBackend,
      grabXbitPrivateData,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/xbits/Work.vue'),
  },
  {
    path: '/brain/',
    name: 'BrainBits',

    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresBackend,
      grabXbitList,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/xbits/Chains.vue'),
  },
  {
    path: '/bits/',
    name: 'BitList',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Blank.vue'),
  },

  // ----------------------------------------------------------------------------------------- EXPLORE ROUTES
  {
    path: '/talent',
    name: 'TalentHub',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "talent" */ '@/views/explore/Talent.vue'),
  },
  {
    path: '/academy',
    name: 'AcademyHub',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "academy" */ '@/views/explore/Academy.vue'),
  },
  {
    path: '/network',
    name: 'NetworkHub',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "academy" */ '@/views/explore/Network.vue'),
  },

  // ----------------------------------------------------------------------------------------- NETWORK ROUTES
  // xpert match
  // lunch club
  // weekend club
  // office hours

  // ----------------------------------------------------------------------------------------- TALENT ROUTES
  {
    path: '/talent/offer',
    name: 'CreateOffer',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "talent" */ '@/views/talent/Offer.vue'),
  },
  {
    path: '/talent/company',
    name: 'JoinCompany',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Blank.vue'),
  },
  {
    path: '/on/:offercode',
    name: 'OfferDetail',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Blank.vue'),
  },
  {
    path: '/at/:companydomain',
    name: 'CompanyDetail',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/Blank.vue'),
  },
  // ----------------------------------------------------------------------------------------- ACADEMY ROUTES

  {
    path: '/storm/:bitcode',
    name: 'StormCreate',

    beforeEnter: multiguard([
      requiresAuthenticated,
      backendInSyncWait,
      grabXbitPublicData,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/storm/New.vue'),
  },
  {
    path: '/s/:stormcode',
    name: 'StormDetail',

    beforeEnter: multiguard([
      requiresAuthenticated,
      backendInSyncWait,
      grabStorm,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/storm/Detail.vue'),
  },
  {
    path: '/s/:stormcode/:stormid',
    name: 'StormIdentityDetail',

    beforeEnter: multiguard([
      requiresAuthenticated,
      backendInSyncWait,
      grabStorm,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/storm/Detail.vue'),
  },
  {
    path: '/brainstorm/',
    name: 'StormList',

    beforeEnter: multiguard([
      requiresAuthenticated,
      backendInSyncWait,
      grabStormList,
    ]),
    component: () =>
      import(/* webpackChunkName: "xbits" */ '@/views/storm/List.vue'),
  },

  // ----------------------------------------------------------------------------------------- PUBLIC DYNAMIC ROUTES

  {
    path: '/x/:username',
    name: 'XpertId',

    beforeEnter: multiguard([grabXpertPublicProfile]),
    component: () =>
      import(/* webpackChunkName: "public" */ '@/views/xpert/Public.vue'),
  },
  {
    path: '/notfound',
    name: 'XpertNotFound',

    beforeEnter: multiguard([]),
    component: () =>
      import(
        /* webpackChunkName: "public" */ '@/views/public/XpertNotFound.vue'
      ),
  },
  // ----------------------------------------------------------------------------------------- PUBLIC STATIC ROUTES
  {
    path: '/mission',
    name: 'Mission',

    beforeEnter: multiguard([]),
    component: () =>
      import(/* webpackChunkName: "public" */ '@/views/public/Blank.vue'),
  },
  {
    path: '/feedback',
    name: 'Feedback',

    beforeEnter: multiguard([]),
    component: () =>
      import(/* webpackChunkName: "public" */ '@/views/public/Blank.vue'),
  },

  // ----------------------------------------------------------------------------------------- LAB ROUTES ----------- WORK IN PROGRESS

  {
    path: '/lab/cal',
    name: 'CustomCal',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/_legacy/CustomCal.vue'),
  },

  {
    path: '/lab/storm',
    name: 'StormLab',

    beforeEnter: multiguard([
      requiresAuthenticated,
      requiresBackend,
      backendInSyncWait,
    ]),
    component: () =>
      import(/* webpackChunkName: "legacy" */ '@/views/storm/New.vue'),
  },
  {
    path: '/lab/time',
    name: 'Time',

    beforeEnter: multiguard([requiresAuthenticated, backendInSyncWait]),
    component: () =>
      import(
        /* webpackChunkName: "legacy" */ '@/views/_legacy/TimeManipulation.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

router.beforeEach((to, from, next) => {
  console.log('route entry')
  store.dispatch('updateGlobalStatus', {
    loading: true,
    clean: true,
    block: true,
  })
  next()
})

router.afterEach(() => {
  console.log('route exit')
  store.dispatch('updateGlobalStatus', {
    loading: false,
    clean: true,
    block: true,
  })
})

export default router
