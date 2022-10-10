// baseline --------------------------------------------------------------------------------------------

const functions = require('firebase-functions')
const { firestore } = require('./admin')
const { stormGraphCreate } = require('./_storm_graph')

// function extras

const crypto = require('crypto')
const _ = require('lodash')

// ----------------------------------------------------------------------------------------------------

const stormListRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const storm_list_red = await firestore
    .collection('storms')
    .doc(context.auth.uid)
    .collection('red')
    .get()
    .catch((error) => {
      console.log(error)
    })

  var storm_list_red_filtered = await storm_list_red.docs.map((doc) =>
    doc.data()
  )

  const storm_list_blue = await firestore
    .collection('storms')
    .doc(context.auth.uid)
    .collection('blue')
    .get()
    .catch((error) => {
      console.log(error)
    })

  var storm_list_blue_filtered = await storm_list_blue.docs.map((doc) =>
    doc.data()
  )

  var red_storm_bouts = {}
  var blue_storm_bouts = {}

  if (storm_list_red_filtered) {
    let red_result_bouts = await Promise.all(
      _.map(storm_list_red_filtered, async (element) => {
        var element_bouts = await firestore
          .collection('storms')
          .doc(context.auth.uid)
          .collection('red')
          .doc(element.id)
          .collection('bouts')
          .get()
          .catch((error) => {
            console.log(error)
          })
        red_storm_bouts[element.id] = await element_bouts.docs.map((doc) =>
          doc.data()
        )
        return true
      })
    )
    console.log(red_result_bouts)
  }
  if (storm_list_blue_filtered.length > 0) {
    let blue_result_bouts = await Promise.all(
      _.map(storm_list_blue_filtered, async (element) => {
        var element_bouts = await firestore
          .collection('storms')
          .doc(context.auth.uid)
          .collection('blue')
          .doc(element.id)
          .collection('bouts')
          .get()
          .catch((error) => {
            console.log(error)
          })
        blue_storm_bouts[element.id] = await element_bouts.docs.map((doc) =>
          doc.data()
        )
        return true
      })
    )
    console.log(blue_result_bouts)
  }

  // TODO check is bouts already expired and remove them from list

  const result = {
    red: storm_list_red_filtered,
    red_bouts: red_storm_bouts,
    blue: storm_list_blue_filtered,
    blue_bouts: blue_storm_bouts,
  }
  console.log(result)

  return result
}

const stormCreateRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const t = _.now()
  const stormCode = crypto
    .createHash('md5')
    .update(context.auth.uid + '-' + data.bit)
    .digest('hex')
    .toString()

  const stormInstance = context.auth.uid.slice(0, 7) + t

  var new_storm = {
    time_created: t,
    sid: stormCode,
    sis: stormInstance,
    red: data.red,
    blue: context.auth.uid,
    bit: data.bit,
    bit_graph: data.bit_graph,
    storm_graph: '',
    start: data.slot.startTime,
    end: data.slot.endTime,
    duration: data.slot.duration,
    message: data.message,
    accepted: false,
    reviewed: false,
    xperts: [],
  }

  console.log(new_storm)

  const storm_graph_result = await stormGraphCreate({
    data: { sid: stormCode, sis: stormInstance },
    owner: context.auth.uid,
    bit_id: data.bit_graph,
    bit_time: data.slot.startTime.ts,
  })

  console.log(storm_graph_result)

  new_storm.storm_graph = storm_graph_result

  // TODO CHECK IF THERE IS A NON REVIEWED AND STILL NOT ACCEPTED BOUT BEFORE ADDING ANOTHER ONE
  // TODO 2 unreviewed bookings max

  // put the storm on his bit collection
  // const storm_attach = await firestore
  //   .collection('bits')
  //   .doc(new_storm.red)
  //   .collection('k')
  //   .doc(new_storm.bit)
  //   .collection('storms')
  //   .doc()
  //   .set(
  //     {
  //       sid: stormCode,
  //       sis: stormInstance,
  //       ref: firestore.doc(
  //         'xstorms/' + stormCode + '/bouts/' + stormInstance
  //       ),
  //     },
  //     { merge: false }
  //   )
  //   .then(function () {
  //     return true
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //     return false
  //   })

  //save the storm to my collection (im the cahllen
  const storm_save = await firestore
    .collection('storms')
    .doc(context.auth.uid)
    .collection('blue')
    .doc(stormCode)
    .collection('bouts')
    .doc(stormInstance)
    .set(new_storm, { merge: false })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  const storm_save_time = await firestore
    .collection('storms')
    .doc(context.auth.uid)
    .collection('blue')
    .doc(stormCode)
    .set({ id: stormCode, updated: t }, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  // save the storm to red corner collection
  const storm_challenge_save = await firestore
    .collection('storms')
    .doc(new_storm.red)
    .collection('red')
    .doc(stormCode)
    .collection('bouts')
    .doc(stormInstance)
    .set(new_storm, { merge: false })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  const storm_challenge_save_time = await firestore
    .collection('storms')
    .doc(new_storm.red)
    .collection('red')
    .doc(stormCode)

    .set({ id: stormCode, updated: t }, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  // save the storm to the public repo
  const xstorm_save = await firestore
    .collection('xstorms')
    .doc(stormCode)
    .collection('bouts')
    .doc(stormInstance)
    .set(new_storm, { merge: false })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (
    storm_save &&
    xstorm_save &&
    storm_challenge_save &&
    storm_save_time &&
    storm_challenge_save_time
  ) {
    return { sid: stormCode, sis: stormInstance }
  }
}

const stormUpdatedEvent = async (change, context) => {
  var boutdata = change.after.data()
  const bit_bout_result = await firestore
    .collection('bits')
    .doc(boutdata.red)
    .collection('k')
    .doc(boutdata.bit)
    .collection('brainstorms')
    .doc(boutdata.sis)
    .set(boutdata, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })
  console.log(bit_bout_result)
}

const stormActionRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  if (data.red == context.auth.uid || data.blue == context.auth.uid) {
    const storm_challenge_update = await firestore
      .collection('storms')
      .doc(data.red)
      .collection('red')
      .doc(data.sid)
      .collection('bouts')
      .doc(data.sis)
      .set(
        {
          accepted: data.accepted,
          reviewed: true,
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

    const storm_update = await firestore
      .collection('storms')
      .doc(data.blue)
      .collection('red')
      .doc(data.sid)
      .collection('bouts')
      .doc(data.sis)
      .set(
        {
          accepted: data.accepted,
          reviewed: true,
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
    if (storm_update && storm_challenge_update) {
      return true
    }
  }
  return false
}

module.exports = {
  stormCreateRequest,
  stormListRequest,
  stormUpdatedEvent,
  stormActionRequest,
}
