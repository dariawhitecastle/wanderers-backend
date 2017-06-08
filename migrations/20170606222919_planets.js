
exports.up = (knex) => {
  return knex.schema.createTable('planets', (planets) => {
    planets.increments('id')
    planets.string('name')
    planets.integer('num_moons')
    planets.string('moon_name')
    planets.integer('orbit_period')
    planets.integer('low_temp')
    planets.integer('hi_temp')
    planets.text('facts')
    planets.text('link')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('planets')
}
