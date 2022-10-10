// baseline --------------------------------------------------------------------------------------------

const functions = require('firebase-functions')
const { firestore } = require('./admin')
const { bitGraphCreate } = require('./_bit_graph')

// function extras
const { v4: uuidv4 } = require('uuid')
const slugify = require('slugify')
const sanitizeHtml = require('sanitize-html')
const sanitizeOptions = {
  allowedTags: [
    'u',
    'a',
    'code',
    'mark',

    'ol',
    'li',
    'ul',
    'p',
    'b',
    'i',
    'em',
    'strong',
  ],
  allowedAttributes: {
    a: ['href', 'rel', 'target'],
  },
  allowedSchemes: ['https', 'mailto'],
  allowProtocolRelative: false,
}
//compression
const lz = require('lz-string')
// compressToUTF16
// decompressFromUTF16

const _ = require('lodash')

// ----------------------------------------------------------------------------------------------------

const bitUpdateEvent = async (data, context) => {
  var bitupdated = change.after.data()
  const bitcode = context.params.bitcode

  if (!bitupdated.metadata.public) {
    bitupdated = {
      id: bitcode,
      metadata: { public: false },
    }
  } else {
    bitupdated.data = lz.decompressFromUTF16(bitupdated.data)
    bitupdated.ref = {}
  }

  console.log(bitupdated)

  let config = {
    method: 'post',
    url: 'http://meta.xpert.id/indexes/bits/documents',
    headers: {
      'X-Meili-Api-Key':
        '11978644530325fea90d85658a79f8ec5672fb27991d7e6380fc3662dc59e7e4',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify([bitupdated]),
  }

  // const ax_result = await axios(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data))
  //     return true
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     return false
  //   })

  // console.log(ax_result)
}

const bitSaveRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const t = _.now()
  const bitCode = data.bitcode
  var bitContent = data.content.json
  var bitMetadata = data.content.metadata

  // TODO google nlp

  // // Prepares a document, representing the provided text
  // const document = {
  //   content: bitContent,
  //   type: 'PLAIN_TEXT',
  // }

  // // Classifies text in the document
  // const [classification] = await nlpClient.classifyText({ document })
  // console.log('Categories:')
  // classification.categories.forEach((category) => {
  //   console.log(`Name: ${category.name}, Confidence: ${category.confidence}`)
  //   console.log(category)
  // })

  // const [result] = await nlpClient.analyzeEntities({ document })

  // const entities = result.entities

  // console.log('Entities:')
  // entities.forEach((entity) => {
  //   if (entity.metadata && entity.metadata.wikipedia_url) {
  //     console.log(entity.name)
  //     console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`)
  //     console.log(entity.metadata)
  //     // console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`)
  //   }
  // })

  // ! process unathorized html tags -------------------------------------------

  bitContent = _.replace(
    bitContent,
    new RegExp('a href', 'g'),
    'a target=_blank rel=nofollow href'
  )

  var bitContentClean = JSON.parse(bitContent)

  bitContentClean.blocks = _.map(bitContentClean.blocks, (b) => {
    if (b.type == 'paragraph') {
      b.data.text = sanitizeHtml(b.data.text, sanitizeOptions)
      return b
    } else {
      return b
    }
  })

  // ! get title and description -------------------------------------------

  var bitTitle_h = _.find(bitContentClean.blocks, function (o) {
    return o.type == 'header'
  })
  var bitTitle_p = _.find(bitContentClean.blocks, function (o) {
    return o.type == 'paragraph'
  })

  if (bitTitle_h) {
    bitTitle_h = _.truncate(bitTitle_h.data.text, {
      length: 32,
      separator: ' ',
    })
  }
  if (bitTitle_p) {
    bitTitle_p = _.truncate(bitTitle_p.data.text, {
      length: 140,
      separator: ' ',
    })
  }
  if (!bitTitle_h && bitTitle_p) {
    bitTitle_h = _.truncate(bitTitle_p, {
      length: 32,
      separator: ' ',
    })
    bitTitle_p = ''
  }

  const bitTitle_slug = slugify(bitTitle_h || bitCode, {
    remove: /[*+~./\\()'"!:@]/g,
  }).toLowerCase()

  // ! -------------------------------------------

  // ! Cleaning integrity check

  try {
    bitContentClean = JSON.stringify(bitContentClean)
  } catch (e) {
    return { error: true }
  }

  // ! extract linked data -------------------------------------------

  const hashtags_found = _.uniq(
    bitContentClean.match(new RegExp('#([^[&"\\s~@\\p{Po}])+', 'gu'))
  )
  const xperts_found = _.uniq(
    bitContentClean.match(new RegExp('@([^[&"\\s~@\\p{Po}])+', 'gu'))
  )
  const bits_found = _.uniq(
    bitContentClean.match(new RegExp('~~([^[&"\\s~@\\p{Po}])+', 'gu'))
  )

  // ! zipping Integrity check

  const bitContentCleanZip = lz.compressToUTF16(bitContentClean)
  const bitContentCleanUnZip = lz.decompressFromUTF16(bitContentCleanZip)

  try {
    JSON.parse(bitContentCleanUnZip)
  } catch (e) {
    return { error: true }
  }

  //! -------------------------------- end integrity check

  console.log(hashtags_found)
  console.log(xperts_found)
  console.log(bits_found)
  console.log(bitTitle_slug)
  console.log(bitTitle_h)

  // ! BUILD THE BIT OBJECT
  //
  //
  let sbit = {
    owner: context.auth.uid,
    id: bitCode,
    data: bitContentCleanZip,
    meta_keywords: hashtags_found,
    meta_xperts: xperts_found,
    meta_chain: bits_found,
    time_updated: t,
    title: bitTitle_h || '',
    description: bitTitle_p || '',
    slug: bitTitle_slug,
    active: true,
    metadata: bitMetadata || {},
  }

  const xbit_result = await firestore
    .collection('xbits')
    .doc(bitCode)
    .set(sbit, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  sbit.data = bitContentClean

  const bit_result = await firestore
    .collection('bits')
    .doc(context.auth.uid)
    .collection('k')
    .doc(bitCode)
    .set(sbit, { merge: true })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (bit_result && xbit_result) {
    return sbit
  } else {
    return { error: true }
  }
}

const bitCreateRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const t = _.now()
  const bitCode = uuidv4()
  var bitContent = data.content.json
  var bitDeadline = data.deadline
  var bitOwnerGraphId = data.owner
  var bitOwner = context.auth.uid

  // ! Calculate dates for deadline and expiration

  //TODO ! Calculate dates for deadline and expiration

  // ! clear cache -------------------------------------------

  // ! process unathorized html tags -------------------------------------------

  bitContent = _.replace(
    bitContent,
    new RegExp('a href', 'g'),
    'a target=_blank rel=nofollow href'
  )

  var bitContentClean = JSON.parse(bitContent)

  bitContentClean.blocks = _.map(bitContentClean.blocks, (b) => {
    if (b.type == 'paragraph') {
      b.data.text = sanitizeHtml(b.data.text, sanitizeOptions)
      return b
    } else {
      return b
    }
  })

  // ! get title and description -------------------------------------------

  var bitTitle_h = _.find(bitContentClean.blocks, function (o) {
    return o.type == 'header'
  })
  var bitTitle_p = _.find(bitContentClean.blocks, function (o) {
    return o.type == 'paragraph'
  })

  if (bitTitle_h) {
    bitTitle_h = _.truncate(bitTitle_h.data.text, {
      length: 32,
      separator: ' ',
    })
  }
  if (bitTitle_p) {
    bitTitle_p = _.truncate(bitTitle_p.data.text, {
      length: 140,
      separator: ' ',
    })
  }
  if (!bitTitle_h && bitTitle_p) {
    bitTitle_h = _.truncate(bitTitle_p, { length: 32, separator: ' ' })
    bitTitle_p = ''
  }

  const bitTitle_slug = slugify(bitTitle_h || bitCode, {
    remove: /[*+~./\\()'"!:@]/g,
  }).toLowerCase()

  // ! -------------------------------------------

  // ! Cleaning integrity check

  try {
    bitContentClean = JSON.stringify(bitContentClean)
  } catch (e) {
    return { error: true }
  }

  // ! extract linked data -------------------------------------------

  const hashtags_found = _.uniq(
    bitContentClean.match(new RegExp('##([^[&"\\s~@\\p{Po}])+', 'gu'))
  )
  const xperts_found = _.uniq(
    bitContentClean.match(new RegExp('@@([^[&"\\s~@\\p{Po}])+', 'gu'))
  )
  const bits_found = _.uniq(
    bitContentClean.match(new RegExp('~~([^[&"\\s~@\\p{Po}])+', 'gu'))
  )
  const skills_found = _.uniq(
    bitContentClean.match(new RegExp('§§([^[&"\\s~@\\p{Po}])+', 'gu'))
  )

  // ! zipping Integrity check

  const bitContentCleanZip = lz.compressToUTF16(bitContentClean)
  const bitContentCleanUnZip = lz.decompressFromUTF16(bitContentCleanZip)

  try {
    JSON.parse(bitContentCleanUnZip)
  } catch (e) {
    return { error: true }
  }

  // //! -------------------------------- end integrity check

  console.log(hashtags_found)
  console.log(xperts_found)
  console.log(bits_found)
  console.log(skills_found)
  console.log(bitTitle_slug)
  console.log(bitTitle_h)

  let sbit = {
    owner: context.auth.uid,
    id: bitCode,
    graph_id: '',
    data: bitContentClean,

    bid: bitCode,
    updated: t + '',

    meta_keywords: hashtags_found,
    meta_chain: bits_found,

    meta_hashtags: [],
    meta_xperts: xperts_found,
    meta_sectors: [],
    meta_skills: [],

    time_origin: t,
    time_updated: t,
    time_deadline: bitDeadline,

    title: bitTitle_h || '',
    description: bitTitle_p || '',
    slug: bitTitle_slug,
    active: true,
    metadata: {
      public: false,
      status: 0,
      sectors: [],
      skills: [],
      locations: [],
      languages: [],
    },
  }

  // ! End of processing the saved content

  // ! create on graph database

  const bit_graph_result = await bitGraphCreate({
    data: { bid: bitCode, updated: '' + t },
    owner: bitOwner,
  })

  sbit.graph_id = bit_graph_result

  // TODO

  const bit_result = await firestore
    .collection('bits')
    .doc(context.auth.uid)
    .collection('k')
    .doc(bitCode)
    .set(sbit, { merge: false })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  sbit.ref = {
    raw: '',
    storms: '',
    owner: firestore.doc('users/' + context.auth.uid),
  }
  sbit.data = bitContentCleanZip

  const xbit_result = await firestore
    .collection('xbits')
    .doc(bitCode)
    .set(sbit, { merge: false })
    .then(function () {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (bit_result && xbit_result) {
    return bitCode
  } else {
    return { error: true }
  }
}

const bitListRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  const xbit_list = await firestore
    .collection('bits')
    .doc(context.auth.uid)
    .collection('k')
    .get()
    .catch((error) => {
      console.log(error)
    })

  var xbit_list_filtered = []
  xbit_list.forEach((doc) => {
    xbit_list_filtered.push(
      _.pick(doc.data(), [
        'id',
        'title',
        'description',
        'metadata',
        'time_origin',
        'time_updated',
      ])
    )
  })

  console.log(xbit_list_filtered)

  return xbit_list_filtered
}

const bitOthersRequest = async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }
  var xbitListFiltered = []
  var xbitsRef = firestore.collection('xbits')
  var query = await xbitsRef
    .orderBy('owner')
    .orderBy('time_updated', 'desc')
    .where('owner', '!=', context.auth.uid)
    .limit(10)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        xbitListFiltered.push(
          _.pick(doc.data(), [
            'id',
            'title',
            'description',
            'metadata',
            'owner',
            'time_updated',
          ])
        )

        // console.log(doc.id, ' => ', doc.data())
      })
      return xbitListFiltered
    })
    .catch((error) => {
      console.log('Error getting documents: ', error)
      return false
    })

  console.log(query)
  return query
}

module.exports = {
  bitListRequest,
  bitOthersRequest,
  bitCreateRequest,
  bitSaveRequest,
  bitUpdateEvent,
}
