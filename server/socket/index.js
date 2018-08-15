import socketio from 'socket.io'

let buildsNamespace

export default server => {
  const socket = socketio(server)
  buildsNamespace = socket.of('/builds')

  buildsNamespace
    .use(async (clientSocket, next) => next())
    .on('connection', clientSocket => {
      console.log('Connection')
    })
}

export const socket = () => buildsNamespace
