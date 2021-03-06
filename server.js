import express from 'express'
import http from 'http'
import next from 'next'
import api from 'server/api'
import intializeSocket from 'server/socket'
import { emitProjects } from 'server/socket/emitProjects'
import { poll } from 'common/utilities/polling'
import { syncProjects } from 'server/data/syncProjects'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const expressApp = express()
const server = http.Server(expressApp)

nextApp.prepare().then(() => {
  const socket = intializeSocket(server)
  api(expressApp, nextApp)

  server.listen(port, () => {
    console.log('Server listening at port %d', port)
  })

  syncProjects()

  poll(() => emitProjects(socket), 10000)
})
