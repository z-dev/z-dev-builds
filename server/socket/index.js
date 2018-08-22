import socketio from 'socket.io'
import { emitProjects } from './emitProjects'

let projectsNamespace

export default server => {
  const socket = socketio(server)
  projectsNamespace = socket.of('/projects')

  projectsNamespace.on('connection', async () => {
    console.log('Connection')
    await emitProjects()
  })
}

export const socket = () => projectsNamespace
