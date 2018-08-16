import { socket } from '../'
import request from 'superagent'
import { repeat } from 'common/utilities/repeat'

export default () => {
  repeat(async () => {
    const buildsResponse = await request.get(`https://circleci.com/api/v1.1/projects?circle-token=${process.env.CIRCLE_TOKEN}`)

    // _.forEach(builds, project => console.log(project.reponame, project.branches))
    socket().emit('builds', {builds: buildsResponse})
  }, 10000)
}
