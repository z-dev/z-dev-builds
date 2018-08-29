import socketio from 'socket.io'
import { emitProjects } from './emitProjects'

export default server => {
  const socket = socketio(server)
  const projectsNamespace = socket.of('/projects')

  projectsNamespace.on('connection', async clientSocket => {
    console.log('Connection')
    emitProjects(clientSocket)
  })

  return projectsNamespace
}
