import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/functions'

import firebaseConfig from '../config/firebase'

// initialize firebase app

firebase.initializeApp(firebaseConfig)

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

// firebase analytics
// const analytics = firebase.analytics()

// analytics.logEvent('app instanciated', {
//   important: false,
// })

// firebase utils
const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()
const realtime = firebase.database()

// local emulator setup
if (
  location.hostname === 'localhost' ||
  location.hostname === '100.126.139.62'
) {
  db.useEmulator('localhost', 8088)
  auth.useEmulator('http://localhost:9099/')
  functions.useEmulator('localhost', 5001)
  storage.useEmulator('localhost', 9199)
  realtime.useEmulator('localhost', 9000)
}

export { db, auth, storage, firebase, functions, realtime }
