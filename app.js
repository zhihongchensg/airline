// import express
var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var app = express()
var port = 3000

var home = require('./routes/home')
var flights = require('./routes/flights')
var passengers = require('./routes/passengers')

app.use(express.static(__dirname + '/Public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use('/', home)
app.use('/flights', flights)
app.use('/passengers', passengers)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
