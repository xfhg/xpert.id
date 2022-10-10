const { functions } = require('firebase-functions')
// const { firestore } = require('./admin')
const { graphdb } = require('./graph')

// function extras

// const _ = require('lodash')
// const { v4: uuidv4 } = require('uuid')

const xpertGraphList = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }
}

const xpertGraphCreate = async (data, context) => {
  const xpert_id = await graphdb
    .create('XPERT', {
      uuid: data.uuid,
      username: data.username,
      invite: data.invite,
    })
    .then((newxpert) => {
      return newxpert.id()
    })
    .catch((err) => {
      console.log(err)
      return false
    })

  const baseline_act = await graphdb
    .create('ACT', {
      owner: data.uuid,
    })
    .then((newact) => {
      return newact.id()
    })
  const baseline_brain = await graphdb
    .create('BRAIN', {
      owner: data.uuid,
    })
    .then((newbrain) => {
      return newbrain.id()
    })

  const baseline_xid = await graphdb
    .create('XID', {
      owner: data.uuid,
      username: data.username,
      updated: data.updated + '',
    })
    .then((newxid) => {
      return newxid.id()
    })

  const xpert_baseline = await Promise.all([
    graphdb.findById('XID', parseInt(baseline_xid)),
    graphdb.findById('BRAIN', parseInt(baseline_brain)),
    graphdb.findById('ACT', parseInt(baseline_act)),
    graphdb.findById('XPERT', parseInt(xpert_id)),
  ])
    .then(([xid, xbrain, xact, xpert]) => {
      console.log('promise all ready')

      xpert.relateTo(xid, 'linked', {}).then((res) => {
        console.log(res)
      })
      xpert.relateTo(xbrain, 'linked', {}).then((res) => {
        console.log(res)
      })
      xpert.relateTo(xact, 'linked', {}).then((res) => {
        console.log(res)
      })
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (xpert_baseline) {
    return xpert_id
  }
}

const xpertGraphUpdate = async (data, context) => {}

const xpertGraphGet = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }
}

const xpertGraphDelete = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }
}

module.exports = {
  xpertGraphCreate,
  xpertGraphUpdate,
  xpertGraphDelete,
  xpertGraphList,
  xpertGraphGet,
}
