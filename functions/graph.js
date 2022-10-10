var Neode = require('neode')

const graphdb = new Neode(
  'neo4j+s://4f769b84.databases.neo4j.io',
  'neo4j',
  'mq8wTloA5ThYN6Hcjhbwqp2y80aMY0aid0cHnPBpZD0'
)

// ! Node definitions

// the xpert
graphdb.model('XPERT', {
  uuid: {
    index: true,
    type: 'string',
    unique: true,
  },
  username: {
    type: 'string',
    index: true,
  },
  invite: {
    type: 'string',
    index: true,
  },
})

// the xpert profile
graphdb.model('XID', {
  username: {
    type: 'string',
    index: true,
  },
  owner: {
    index: true,
    type: 'string',
  },
  avatar: {
    type: 'string',
  },
  name: {
    type: 'string',
  },
  active: {
    type: 'string',
  },
  updated: {
    type: 'string',
  },
})

// what you think (bits)
graphdb.model('BRAIN', {
  owner: {
    index: true,
    type: 'string',
  },
  type: {
    type: 'string',
  },
})

// what you do (storms)
graphdb.model('ACT', {
  owner: {
    index: true,
    type: 'string',
  },
  type: {
    type: 'string',
  },
})

// what you have (assets, teammates, etc)
graphdb.model('DOMAIN', {
  type: {
    type: 'string',
  },
})

// ! --------------------------------------------------------

graphdb.model('LOCATION', {
  lid: {
    index: true,
    type: 'string',
    unique: true,
  },
})

graphdb.model('BIT', {
  bid: {
    index: true,
    type: 'string',
    unique: true,
  },
  updated: {
    type: 'string',
  },
})

graphdb.model('STORM', {
  sid: {
    index: true,
    type: 'string',
  },
  sis: {
    index: true,
    type: 'string',
    unique: true,
  },
})

graphdb.model('ASSET', {
  aid: {
    index: true,
    type: 'string',
    unique: true,
  },
})

// ! --------------------------------------------------------
// ! PLATFORM ENTITIES
graphdb.model('LOCATION', {
  lid: {
    index: true,
    type: 'string',
    unique: true,
  },
})
graphdb.model('PLACE', {})

graphdb.model('SKILL', {})

graphdb.model('SECTOR', {})

graphdb.model('LANGUAGE', {
  lid: {
    index: true,
    type: 'string',
    unique: true,
  },
})
// ! --------------------------------------------------------

// ! --------------------------------------------------------
// ! relationship definitions

graphdb
  .model('XPERT')
  .relationship('invited', 'relationship', 'INVITED', 'out', 'XPERT', {
    time: {
      type: 'string',
      required: true,
    },
  })

// ! --------------------------------------------------------

graphdb
  .model('BRAIN')
  .relationship('created', 'relationship', 'CREATED', 'out', 'BIT', {
    time: {
      type: 'string',
      required: true,
    },
  })

// ! --------------------------------------------------------

graphdb
  .model('ACT')
  .relationship('activated', 'relationship', 'ACTIVATED', 'out', 'STORM', {
    time: {
      type: 'string',
      required: true,
    },
  })

// ! --------------------------------------------------------

graphdb
  .model('STORM')
  .relationship('targets', 'relationship', 'TARGETS', 'out', 'BIT', {
    time: {
      type: 'string',
      required: true,
    },
  })

// ! --------------------------------------------------------

graphdb
  .model('XPERT')
  .relationship('linked', 'relationship', 'LINKED', 'out', 'BRAIN', {})

graphdb
  .model('XPERT')
  .relationship('linked', 'relationship', 'LINKED', 'out', 'ACT', {})

graphdb
  .model('XPERT')
  .relationship('linked', 'relationship', 'LINKED', 'out', 'XID', {})

//! --------------------------------------------------------

graphdb
  .model('BIT')
  .relationship('mentions', 'relationship', 'MENTIONS', 'out', 'XPERT', {})

// TODO o schema vai pa um spot tipo o SETSYSTEM
// graphdb.schema
//   .install()
//   .then(() => {
//     console.log('Schema installed!')
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// graphdb.schema.drop().then(() => {
//   console.log('Schema dropped!')
//   graphdb.schema
//     .install()
//     .then(() => {
//       console.log('Schema installed!')
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

module.exports = {
  graphdb,
}
