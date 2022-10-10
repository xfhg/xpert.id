//CACHE BUSTING

// workbox.core.setCacheNameDetails({ prefix: 'xp' })

// //Change this value every time before you build
// const LATEST_VERSION = '7c30cad-20210518-0015'

// self.addEventListener('activate', () => {
//   // console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff')
//   // console.log(event)
//   if (caches) {
//     caches.keys().then((arr) => {
//       arr.forEach((key) => {
//         if (key.indexOf('xp-precache') < -1) {
//           caches
//             .delete(key)
//             .then(() =>
//               console.log(
//                 `%c Cleared ${key}`,
//                 'background: #333; color: #ff0000'
//               )
//             )
//         } else {
//           caches.open(key).then((cache) => {
//             cache.match('version').then((res) => {
//               if (!res) {
//                 cache.put(
//                   'version',
//                   new Response(LATEST_VERSION, {
//                     status: 200,
//                     statusText: LATEST_VERSION,
//                   })
//                 )
//               } else if (res.statusText !== LATEST_VERSION) {
//                 caches
//                   .delete(key)
//                   .then(() =>
//                     console.log(
//                       `%c Cleared Cache ${LATEST_VERSION}`,
//                       'background: #333; color: #ff0000'
//                     )
//                   )
//               } else
//                 console.log(
//                   `%c Great you have the latest version ${LATEST_VERSION}`,
//                   'background: #333; color: #00ff00'
//                 )
//             })
//           })
//         }
//       })
//     })
//   }
// })

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
// https://medium.com/@dougallrich/give-users-control-over-app-updates-in-vue-cli-3-pwas-20453aedc1f2
self.addEventListener('message', (e) => {
  if (!e.data) {
    return
  }
  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      // NOOP
      break
  }
})

workbox.core.clientsClaim() // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim(); // Vue CLI 3 and Workbox v3.
// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || [])
// workbox.precaching.suppressWarnings(); // Only used with Vue CLI 3 and Workbox v3.
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
