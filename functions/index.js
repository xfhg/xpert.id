const { firestore, admin } = require('./admin')

const { log, warn, error } = require('firebase-functions/lib/logger')

const functions = require('firebase-functions')

// ------------------------------- ------------------------------- -------------------------------
// Function Runtime Config

const runtimeOpts = {
  memory: '512MB',
  // timeoutSeconds: 300,
  // vpcConnector: 'xpertid',
  // vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  minInstances: 0,
}

// This one for events with repeat on failure

const runtimeOptsEvent = {
  failurePolicy: true,
  memory: '512MB',
  minInstances: 0,
}

// ------------------------------- ------------------------------- -------------------------------
// Import functions

const {
  xpertInviteRequest,
  xpertFeedback,
  xpertGetPublicProfile,
  xpertOnCreateEvent,
  xpertCheckUsernameRequest,
  xpertCheckInviteRequest,
  xpertUpdatedEvent,
} = require('./_xpert')

const {
  bitListRequest,
  bitOthersRequest,
  bitCreateRequest,
  bitSaveRequest,
  bitUpdateEvent,
} = require('./_bit')

const {
  stormCreateRequest,
  stormListRequest,
  stormActionRequest,
  stormUpdatedEvent,
} = require('./_storm')

// const {} = require('./_user')

const { linkMetadata } = require('./_util')

// ------------------------------- ------------------------------- -------------------------------
// Test error logs

log("This is a 'INFO' severity message with some metadata.", {
  key1: 'val1',
  key2: 'val2',
})
warn("This is a 'WARNING' severity message with some metadata.", {
  key1: 'val1',
  key2: 'val2',
})
error("This is a 'ERROR' severity message with some metadata.", {
  key1: 'val1',
  key2: 'val2',
})

console.log('ON')

// ------------------------------- ------------------------------- -------------------------------
// ------------------------------- ------------------------------- -------------------------------
// _UTIL REQUESTS

exports.linkMetadata = functions.runWith(runtimeOpts).https.onCall(linkMetadata)

// ------------------------------- ------------------------------- -------------------------------
// ------------------------------- ------------------------------- -------------------------------
// _BIT REQUESTS

exports.bitCreate = functions
  .runWith(runtimeOpts)
  .https.onCall(bitCreateRequest)

exports.bitSave = functions.runWith(runtimeOpts).https.onCall(bitSaveRequest)

exports.bitOthers = functions
  .runWith(runtimeOpts)
  .https.onCall(bitOthersRequest)

exports.bitList = functions.runWith(runtimeOpts).https.onCall(bitListRequest)

// -------------------------------
// _BIT EVENTS

exports.xbitUpdated = functions
  .runWith(runtimeOpts)
  .firestore.document('xbits/{bitcode}')
  .onUpdate(bitUpdateEvent)

// ------------------------------- ------------------------------- -------------------------------
// ------------------------------- ------------------------------- -------------------------------
// _XPERT REQUESTS

exports.xpertInviteRequest = functions
  .runWith(runtimeOpts)
  .https.onCall(xpertInviteRequest)

exports.xpertFeedback = functions
  .runWith(runtimeOpts)
  .https.onCall(xpertFeedback)

exports.xpertGetPublicProfile = functions
  .runWith(runtimeOpts)
  .https.onCall(xpertGetPublicProfile)

exports.xpertCheckUsername = functions
  .runWith(runtimeOpts)
  .https.onCall(xpertCheckUsernameRequest)

exports.xpertCheckInvite = functions
  .runWith(runtimeOpts)
  .https.onCall(xpertCheckInviteRequest)

// -------------------------------
// _XPERT EVENTS

exports.xpertOnCreateEvent = functions
  .runWith(runtimeOptsEvent)
  .auth.user()
  .onCreate(xpertOnCreateEvent)

exports.xpertUpdated = functions
  .runWith(runtimeOpts)
  .firestore.document('xperts/{uid}')
  .onUpdate(xpertUpdatedEvent)

// ------------------------------- ------------------------------- -------------------------------
// ------------------------------- ------------------------------- -------------------------------
// _STORM REQUESTS

exports.stormCreate = functions
  .runWith(runtimeOpts)
  .https.onCall(stormCreateRequest)

exports.stormList = functions
  .runWith(runtimeOpts)
  .https.onCall(stormListRequest)

exports.stormAction = functions
  .runWith(runtimeOpts)
  .https.onCall(stormActionRequest)

// -------------------------------
// _STORM EVENTS

exports.stormUpdated = functions
  .runWith(runtimeOpts)
  .firestore.document('xstorms/{stormid}/bouts/{boutid}')
  .onUpdate(stormUpdatedEvent)

// ! ------------------------------- ------------------------------- -------------------------------
// ! ------------------------------- ------------------------------- -------------------------------
// ! OLD CODE
// ! ------------------------------- ------------------------------- -------------------------------

// exports.rawCreate = functions
//   .runWith(runtimeOpts)
//   .https.onCall(async (data, context) => {
//     if (!context.auth) {
//       throw new functions.https.HttpsError(
//         'failed-precondition',
//         'The function must be called ' + 'while authenticated.'
//       )
//     }

//     const t = _.now()
//     const rawCode = crypto
//       .createHash('md5')
//       .update(context.auth.uid + '-' + data.bit)
//       .digest('hex')
//       .toString()

//     const rawInstance = t + context.auth.uid.slice(0, 7)

//     var new_raw = {
//       time_created: t,
//       rid: rawCode,
//       ris: rawInstance,
//       target: data.red,
//       bit: data.bit,
//       message: data.message,
//       reported: false,
//     }

//     console.log(new_raw)
//     // return { sid: stormCode }

//     const bit_result = await firestore
//       .collection('raw')
//       .doc(data.bit)
//       .collection('k')
//       .doc(bitCode)
//       .set(sbit, { merge: false })
//       .then(function () {
//         return true
//       })
//       .catch(function (error) {
//         console.log(error)
//         return false
//       })

//     // sbit.ref = {
//     //   raw: '',
//     //   storms: '',
//     //   owner: firestore.doc('users/' + context.auth.uid),
//     // }

//     // TODO CHECK IF THERE IS A NON REVIEWED AND STILL NOT ACCEPTED BOUT BEFORE ADDING ANOTHER ONE
//     // TODO 2 unreviewed bookings max

//     const raw_save = await firestore
//       .collection('bits')
//       .doc(new_raw.target)
//       .collection('k')
//       .doc(new_raw.bit)
//       .collection('raw')
//       .doc(rawInstance)
//       .set(new_raw, { merge: false })
//       .then(function () {
//         return true
//       })
//       .catch(function (error) {
//         console.log(error)
//         return false
//       })

//     // if (bit_result && xbit_result) {
//     //   return bitCode
//     // } else {
//     //   return { error: true }
//     // }
//     if (raw_save) {
//       return { rid: rawCode, ris: rawInstance }
//     }
//   })

// BIT KUNG FU

// function getAllUsers(nextPageToken) {
//   admin
//     .auth()
//     .listUsers(100, nextPageToken)
//     .then(function (listUsersResult) {
//       listUsersResult.users.forEach(function (userRecord) {
//         var uid = userRecord.toJSON().uid
//         deleteUser(uid)
//       })
//       if (listUsersResult.pageToken) {
//         getAllUsers(listUsersResult.pageToken)
//       }
//     })
//     .catch(function (error) {
//       console.log('Error listing users:', error)
//     })
// }

// exports.cleanUsers = functions.https.onCall(async (data, context) => {
//   return await getAllUsers()
// })

// ------------------------------- ------------------------------- -------------------------------

// exports.userDeleted = functions.auth.user().onDelete((user) => {
//   console.log(user)
// })

// ! ------------------------------- ------------------------------- -------------------------------
