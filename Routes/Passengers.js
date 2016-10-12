var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Passengers home')
})

// read one movie details
router.get('/:id', function (req, res) {
  res.send('Passengers No ' + req.params.id + ' details')
})

// CREATE ROUTES
router.get('/new', function (req, res) {
  res.send('new Passengers form')
})

router.post('/', function (req, res) {
  res.send('post Passengers form')
})

// UPDATE ROUTES
router.get('/:id/edit', function (req, res) {
  res.send('edit Passengers No ' + req.params.id + ' details')
})

router.put('/:id', function (req, res) {
  res.send('edit Passengers No' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete Passengers ID' + req.params.id)
})


module.exports = router
