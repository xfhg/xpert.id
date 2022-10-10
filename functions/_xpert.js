// baseline --------------------------------------------------------------------------------------------

const functions = require('firebase-functions')
const { firestore } = require('./admin')

const { xpertGraphCreate } = require('./_xpert_graph')

// function extras

const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')

// ----------------------------------------------------------------------------------------------------
const xpertGetPublicProfile = async (data, context) => {
  // if (!context.auth) {
  //   throw new functions.https.HttpsError(
  //     'failed-precondition',
  //     'The function must be called ' + 'while authenticated.'
  //   )
  // }

  const known = data.cache
  var xpusername = data.username
  var xpuid = data.uid

  console.log(data.username)

  if (!known) {
    const username_result = await firestore
      .collection('xusernames')
      .doc(data.username)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data()
        } else {
          return { error: true }
        }
      })
      .catch((error) => {
        console.log(error)
      })

    if (username_result.error) {
      return { error: true }
    }
    xpuid = username_result.uid
  }

  var profile_result = await firestore
    .collection('xperts')
    .doc(xpuid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        return { error: true }
      }
    })
    .catch((error) => {
      console.log(error)
    })

  profile_result.uid = xpuid
  return profile_result
}

const xpertOnCreateEvent = async (user) => {
  // TODO
  // TODO : Send welcome email
  // TODO : CREATE API KEY (call limit 720 as 1 per hour in a month)

  console.log('Running XPERT onCreate')

  const t = _.now()

  var graph_user_data = {
    uuid: user.uid,
    username: user.uid.slice(0, 7).toLowerCase(),
    invite: user.uid.slice(6, 12),
    updated: t,
  }

  const graph_result = await xpertGraphCreate(graph_user_data)

  const user_result = await firestore
    .collection('users')
    .doc(user.uid)
    .set(
      {
        graph_id: graph_result,
      },
      { merge: true }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  const api_result = await firestore
    .collection('xapikeys')
    .doc(uuidv4())
    .set(
      {
        uid: user.uid,
        config: {},
        secret: {},
        limit: 720,
        active: false,
      },
      { merge: false }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  // * CREATE Invite Code (limit for 10 uses)

  const invite_result = await firestore
    .collection('xinvites')
    .doc(user.uid.slice(6, 12))
    .set(
      {
        uid: user.uid,
        config: {},
        limit: 10,
        type: 0,
        active: false,
      },
      { merge: false }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  // * CREATE Username and UID

  const username_result = await firestore
    .collection('xusernames')
    .doc(user.uid.slice(0, 7).toLowerCase())
    .set(
      {
        uid: user.uid,
        config: {},
        type: 0,
        active: true,
      },
      { merge: false }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  const stats_result = await firestore
    .collection('xstats')
    .doc(user.uid)
    .set(
      {
        profile: 0,
        storms: 0,
        bits: 0,
        shifts: 0,
        hot: 0,
      },
      { merge: false }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  const karma_result = await firestore
    .collection('xkarma')
    .doc(user.uid)
    .set(
      {
        karma: 10,
        up: 10,
        down: 0,
        reports: 0,
      },
      { merge: false }
    )
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  console.log(user.uid)
  console.log(user_result)
  console.log(invite_result)
  console.log(username_result)
  console.log(api_result)
  console.log(stats_result)
  console.log(karma_result)
  console.log(graph_result)

  return true
}

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

// ----------------------------------------------------------------------------------------------------

const xpertCheckInviteRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  // Check you are not inviting yourself
  if (context.auth.uid.slice(6, 12) == data.invite) {
    return { error: true }
  }
  // https://firebase.google.com/docs/firestore/query-data/order-limit-data
  // https://firebase.google.com/docs/firestore/query-data/queries

  const invite_result = await firestore
    .collection('xinvites')
    .doc(data.invite)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        return { error: true }
      }
    })
    .catch((error) => {
      console.log(error)
    })

  return invite_result
}

const xpertCheckUsernameRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const username_result = await firestore
    .collection('xusernames')
    .doc(data.username)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data()
      } else {
        return { error: true }
      }
    })
    .catch((error) => {
      console.log(error)
    })

  return username_result
}

const xpertFeedback = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const t = _.now()
  const pageFeedbackId = crypto
    .createHash('md5')
    .update(context.auth.uid + '-' + data.page)
    .digest('hex')
    .toString()

  var new_xpert_feedback = {
    uid: context.auth.uid,
    time_created: t,
    feedback: data.feedback,
    sentiment: data.sentiment,
  }

  console.log(new_xpert_feedback)

  const feedback_result = await firestore
    .collection('xfeedback')
    .doc(pageFeedbackId)
    .set(new_xpert_feedback, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (feedback_result) {
    return true
  }
}

const xpertUpdatedEvent = async (change, context) => {
  var xpert = change.after.data()
  xpert.uid = context.params.uid

  console.log(xpert)
  console.log(xpert.profile.location.languages)
  console.log(xpert.profile.languages)

  try {
    const newDataFiltered = JSON.stringify([
      _.pick(xpert, ['uid', 'experience', 'socials', 'profile', 'skillset']),
    ])

    var newPublicDataFiltered = _.pick(xpert, ['socials', 'profile'])

    newPublicDataFiltered.profile.bio = _.truncate(
      newPublicDataFiltered.profile.bio,
      {
        length: 300,
        separator: ' ',
      }
    )

    const xpert_public_result = await firestore
      .collection('xpublic')
      .doc(context.params.uid)
      .set(newPublicDataFiltered, { merge: true })
      .then(function () {
        console.log('fodasse')
        return true
      })
      .catch(function (error) {
        console.log(error)
        return false
      })

    console.log(xpert_public_result)

    const newData = JSON.stringify([xpert])

    let config_full = {
      method: 'put',
      url: 'http://meta.xpert.id/indexes/xperts/documents',
      headers: {
        'X-Meili-Api-Key':
          '11978644530325fea90d85658a79f8ec5672fb27991d7e6380fc3662dc59e7e4',
        'Content-Type': 'application/json',
      },
      data: newData,
    }

    // const ax_result_full = await axios(config_full)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })

    let config_search = {
      method: 'put',
      url: 'http://meta.xpert.id/indexes/xpertsearch/documents',
      headers: {
        'X-Meili-Api-Key':
          '11978644530325fea90d85658a79f8ec5672fb27991d7e6380fc3662dc59e7e4',
        'Content-Type': 'application/json',
      },
      data: newDataFiltered,
    }

    // const ax_result_search = await axios(config_search)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //     return true
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     return false
    //   })

    // console.log(ax_result_full)
    // console.log(ax_result_search)
    console.log(xpert_public_result)
    if (xpert_public_result) {
      return true
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  xpertInviteRequest,
  xpertFeedback,
  xpertOnCreateEvent,
  xpertGetPublicProfile,
  xpertCheckUsernameRequest,
  xpertCheckInviteRequest,
  xpertUpdatedEvent,
}
