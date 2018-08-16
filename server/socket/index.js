import socketio from 'socket.io'

let buildsNamespace

export default server => {
  const socket = socketio(server)
  buildsNamespace = socket.of('/builds')

  buildsNamespace.on('connection', () => {
    console.log('Connection')
  })
}

export const socket = () => buildsNamespace
