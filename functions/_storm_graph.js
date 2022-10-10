const { graphdb } = require('./graph')

const stormGraphCreate = async (data) => {
  const graph_storm_id = await graphdb
    .create('STORM', data.data)
    .then((newstorm) => {
      console.log(newstorm.id())
      return newstorm.id()
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  const cypher_params = {
    act_owner: data.owner,
    bit_id: parseInt(data.bit_id),
    storm_id: parseInt(graph_storm_id),
    bit_time: data.bit_time,
  }
  console.log(cypher_params)
  const graph_link_result = await graphdb
    .cypher(
      'MATCH (act:ACT {owner: $act_owner}), (storm:STORM) WHERE id(storm) = $storm_id MATCH (bit:BIT) WHERE id(bit) = $bit_id CREATE (act)-[:ACTIVATED {time: $bit_time}]->(storm) CREATE (storm)-[:TARGETS {time: $bit_time}]->(bit)',
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
    return graph_storm_id
  }
}

module.exports = {
  stormGraphCreate,
}
