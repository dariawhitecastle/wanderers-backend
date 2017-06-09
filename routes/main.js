const router = require('express').Router()
const knex = require('../db/knex')

// Queries
function getAllPlanets () {
  return knex('planets')
}

function getPlanetById (id) {
  return knex('planets').where('id', id)
}

function createNewBody (newBody) {
  return knex('planets').insert(newBody).returning('*')
}

function updateBody (id, updatedBody) {
  return knex('planets').where('id', id).update(updatedBody, '*')
}

function deleteBody (id) {
  return knex('planets').where('id', id).del()
}

// Routes
router.get('/', (req, res) => {
  getAllPlanets().then(result => {
    res.json(result)
  })
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  getPlanetById(id).then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.post('/', (req, res) => {
  createNewBody(req.body).then(newBody => {
    res.json(newBody)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  updatedBody(id, req.body).then(updatedBody => {
    res.json(updatedBody)
  })
  .catch(err => {
    console.log(err);
    res.status(503).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  deleteBody(id).then(() => {
    console.log("deleted")
    res.status(204).send()
  })
  .catch(err => {
    console.log(err);
    res.status(503).send(err.message)
  })
})

module.exports = router
