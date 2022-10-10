import {
  required,
  email,
  alpha_num,
  alpha_spaces,
  alpha,
  alpha_dash,
  integer,
  between,
} from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

import isURL from 'validator/lib/isURL'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('email', {
  ...email,
  message: 'This field must be a valid email',
})

extend('alpha', {
  ...alpha,
  message: 'This field only accepts alphabetic characters',
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'This field only accepts alphabetic characters and spaces',
})

extend('alpha_num', {
  ...alpha_num,
  message: 'This field only accepts alphabetic characters and numbers',
})

extend('alpha_dash', {
  ...alpha_dash,
  message:
    'This field only accepts alphabetic characters, numbers, spaces, dashes or underscores',
})
extend('alpha_num_spaces', {
  validate: (value) => {
    if (/^[a-zA-Z0-9 ]*$/.exec(value) != null) {
      return true
    } else {
      return false
    }
  },
  message: 'This field only accepts alphabetic characters, numbers and spaces',
})

extend('integer', {
  ...integer,
  message: 'This field only accepts integers',
})

extend('between', {
  ...between,
  message: 'Invalid input',
})

extend('url', {
  validate: (value) => {
    if (
      isURL(value, {
        protocols: ['https'],
        require_tld: true,
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true,
        allow_underscores: false,
        host_whitelist: false,
        host_blacklist: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        disallow_auth: true,
      })
    ) {
      return true
    }
    return false
  },
  message: 'Required format : https://domain.tld',
})

extend('array_maxlength_5', {
  validate: (value) => {
    if (value.length < 6) {
      return true
    }
    return false
  },
  message: 'Maximum number of items is 5',
})

extend('array_maxlength_3', {
  validate: (value) => {
    if (value.length < 4) {
      return true
    }
    return false
  },
  message: 'Maximum number of items is 3',
})
