const { graphdb } = require('./graph')

const bitGraphCreate = async (data) => {
  // receives bit
  // receives owner graph id

  const graph_bit_id = await graphdb
    .create('BIT', data.data)
    .then((newbit) => {
      console.log(newbit.id())
      return newbit.id()
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  const cypher_params = {
    brain_owner: data.owner,
    bit_id: parseInt(graph_bit_id),
    bit_time: data.data.updated,
  }
  console.log(cypher_params)

  const graph_link_result = await graphdb
    .cypher(
      'MATCH (brain:BRAIN {owner: $brain_owner}), (bit:BIT) WHERE id(bit) = $bit_id CREATE (brain)-[:CREATED {time: $bit_time}]->(bit)',
      cypher_params
    )
    .then(() => {
      return true
    })
    .catch(function (error) {
      console.log(error)
      return false
    })

  if (graph_link_result) {
    return graph_bit_id
  }
}

module.exports = {
  bitGraphCreate,
}
