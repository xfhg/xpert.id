import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn:
    'https://17b0543066a7489680305b053c16e387@o443248.ingest.sentry.io/5466089',
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
      logErrors: true,
    }),
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 5.0,
})

export { Sentry }
