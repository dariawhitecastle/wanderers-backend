const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const PORT = process.env.PORT || 3000
var expressStaticGzip = require("express-static-gzip")

// Route files
const main = require('./routes/main')

const app = express()

app.use('/', expressStaticGzip(path.join(__dirname, '../Wanderers/public')))
app.use('/', express.static(path.join(__dirname, '../Wanderers/public')))

app.use(cors({
  origin: ['http://localhost:3000', 'https://wanderers-capstone.firebaseapp.com'],
  credentials: false
}))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/data', main)

// Listening port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
