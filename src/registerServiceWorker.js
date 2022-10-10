/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'XPERT.ID core platform is being served from cache by a service worker.\n'
      )
    },
    registered(registration) {
      console.log('XPERT.ID Service worker has been registered.')
      setInterval(() => {
        registration.update()
      }, 1000 * 60 * 60) // e.g. hourly checks
    },
    cached() {
      console.log(
        'XPERT.ID core platform content has been cached for offline use.'
      )
    },
    updatefound() {
      console.log('New XPERT.ID core platform content is downloading.')
    },
    updated(registration) {
      console.log('New content is available; please refresh.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
    },
    offline() {
      console.log(
        'No internet connection found. XPERT.ID is running in offline mode. Service is degraded.'
      )
    },
    error(error) {
      console.error('Error during XPERT.ID service worker registration:', error)
    },
  })
}
