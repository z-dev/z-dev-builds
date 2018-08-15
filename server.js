import express from 'express'
import http from 'http'
import next from 'next'
import api from 'server/api'
import socket from 'server/socket'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const expressApp = express()

  const server = http.Server(expressApp)

  socket(server)

  api(expressApp, handle)

  server.listen(port, () => {
    console.log('Server listening at port %d', port)
  })
})


