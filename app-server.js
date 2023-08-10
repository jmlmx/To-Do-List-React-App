const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

//middleware
app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev')) // __dirname means our current root directory
app.use(favicon(path.join(__dirname, 'public','img', 'logo.png'))) // this is for moving through directories on any OS this is run on
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/todos', require('./routes/api/todos')) // stops clashes with frontend routes and static files
app.get('*', (req, res) => {
	res.send(path.join(__dirname, 'public', 'index.html'))
})
module.exports = app