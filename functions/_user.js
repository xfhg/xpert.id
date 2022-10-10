// baseline --------------------------------------------------------------------------------------------

const functions = require('firebase-functions')
const { firestore } = require('./admin')

// function extras

const _ = require('lodash')

// ----------------------------------------------------------------------------------------------------

const xpertInviteRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const t = _.now()

  var new_xpert_pitch = {
    uid: context.auth.uid,
    time_created: t,
    timezone: data.timezone,
    invited: false,
    votes: 0,
    pitch: data.pitch,
    sectors: data.sectors,
  }

  console.log(new_xpert_pitch)

  const pitch_result = await firestore
    .collection('xpitch')
    .doc(context.auth.uid)
    .set(new_xpert_pitch, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (pitch_result) {
    return true
  }
}

module.exports = {
  xpertInviteRequest,
}
