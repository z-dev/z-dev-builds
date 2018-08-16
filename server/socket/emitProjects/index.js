import CircleCI from 'circleci'
import request from 'superagent'
import { repeat } from 'common/utilities/repeat'
import { socket } from '../'

const ci = new CircleCI({
  auth: process.env.CIRCLE_TOKEN
})

export default () => {
  repeat(async () => {
    const projects = await ci.getProjects()

    socket().emit('projects', { projects: projects })
  }, 10000)
}
