import { socket } from '../'
import request from 'superagent'
import { repeat } from 'common/utilities/repeat'

export default () => {
  repeat(() => {
    socket().emit('builds')
  }, 10000)
}
