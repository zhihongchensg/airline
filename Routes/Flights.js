var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('flights/flightshome')
  // res.send('Flights home')
})


// CREATE ROUTES
router.get('/new', function (req, res) {
  res.render('flights/newflight')
})

router.post('/', function (req, res) {
   console.log(req.is('json'))
  res.send('details received: ' + req.body)
})

// UPDATE ROUTES
router.get('/:id/edit', function (req, res) {
  res.send('edit flight No ' + req.params.id + ' details')
})

router.get('/:id', function (req, res) {
  res.send('Flight No ' + req.params.id + ' details')
})


router.put('/:id', function (req, res) {
  res.send('edit flight No' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete flight ID' + req.params.id)
})


module.exports = router
