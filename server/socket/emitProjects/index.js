import { asyncRepeat } from 'common/utilities/asyncRepeat'
import { socket } from '../'
import circleCI from 'common/circleCI'

export default () => {
  asyncRepeat(async () => {
    const projects = await circleCI.getProjects()

    socket().emit('projects', { projects: projects })
  }, 10000)
}
