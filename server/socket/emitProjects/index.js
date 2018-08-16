import { asyncRepeat } from 'common/utilities/asyncRepeat'
import circleCI from 'common/circleCI'
import { socket } from '../'

export default () => {
  asyncRepeat(async () => {
    const projects = await circleCI.getProjects()

    socket().emit('projects', { projects: projects })
  }, 10000)
}
