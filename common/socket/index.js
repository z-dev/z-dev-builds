import socket from 'socket.io-client'

let connectedSocket

export const connectSocket = () => {
  connectedSocket = socket('/builds')
}

export default () => connectedSocket
