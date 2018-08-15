import express from 'express'
import http from 'http'
import next from 'next'
import socket from 'server/socket'
import bodyParser from 'body-parser'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const api = express => {
  express.use(bodyParser.json())

  express.get('*', (request, response) => {
    return handle(request, response)
  })
}

app.prepare()
.then(() => {
  const expressServer = express()

  const server = http.Server(expressServer)

  socket(server)

  api(expressServer)

  server.listen(port, () => {
    console.log('Server listening at port %d', port)
  })
})


