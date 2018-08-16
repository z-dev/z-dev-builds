import socket from 'socket.io-client'

let connectedSocket

export const connectSocket = () => {
  connectedSocket = socket('/projects')
}

export default () => connectedSocket
