import { config } from 'dotenv'
import path from 'path'
import express from 'express'
import api from './api'

// Load .env
config()

console.log(process.env.twitch_client_id)

const paths = {
  public: path.resolve(__dirname, '../public')
}
const port = process.env.PORT || 31337

const app = express()

app.use('*', (req, res, next) => {
  console.log(req.originalUrl)
  next()
})

app.use('/', express.static(paths.public))

app.use('/api', api)

app.listen(port)
