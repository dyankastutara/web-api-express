const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

var mongoDB = 'mongodb://localhost/web-api-express'
mongoose.Promise = require('bluebird')
mongoose.connect(mongoDB, ()=>{
	console.log("Connected to "+mongoDB)
})

var users = require('./routes/users')
var memos = require('./routes/memos')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api/users', users)
app.use('/api/memos', memos)

app.listen(3000, ()=>{
	console.log("You access port 3000")
})