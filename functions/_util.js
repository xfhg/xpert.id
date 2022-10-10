// baseline --------------------------------------------------------------------------------------------

const functions = require('firebase-functions')

// function extras

const got = require('got')
const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-url')(),
])

// ----------------------------------------------------------------------------------------------------

const linkMetadata = async (data, context) => {
  const target = data.url

  if (!(typeof target === 'string') || target.length === 0) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        'one argument "username" is missing.'
    )
  }

  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    )
  }

  try {
    const { body: html, url } = await got(target)
    const metadata = await metascraper({ html, url })
    console.log(metadata)
    return metadata
  } catch (err) {
    console.log(err)
    throw new functions.https.HttpsError(err)
  }
}

module.exports = {
  linkMetadata,
}
