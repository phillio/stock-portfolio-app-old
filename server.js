const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const passport = require('passport')
// const passport = require('./auth/auth')

const authRouter = require('./router/authRouter')

require('dotenv').config()
// establishing the I/O port
const PORT = process.env.PORT || 4567

// initializing the express app
const app = express()

// configure middleware
app.use(logger('dev'))
app.use(cors())
// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use('/auth', authRouter)
app.use(passport.initialize())

app.get('/', async (request, response) => {
  try {
    response.json({message: 'Welcome to Stocks Portfolio App!'})
  } catch (e) {
    response.status(e.status).json({ message: e.status })
  }
})

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message})
})

// app.post('/auth/signup', async (request, response) => {
//   try {
//     console.log('yerp')
//     response.json({message: 'signing up!'})
//   } catch (e) {
//     response.status(e.status).json({ message: e.status })
//   }
// })

app.listen(PORT, () => console.log(`App is up and running listening on port ${PORT}`))
