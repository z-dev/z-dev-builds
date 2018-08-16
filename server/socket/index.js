import socketio from 'socket.io'

let projectsNamespace

export default server => {
  const socket = socketio(server)
  projectsNamespace = socket.of('/projects')

  projectsNamespace.on('connection', () => {
    console.log('Connection')
  })
}

export const socket = () => projectsNamespace
