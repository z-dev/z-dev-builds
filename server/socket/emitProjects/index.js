import _ from 'lodash'
import moment from 'moment'
import { asyncRepeat } from 'common/utilities/asyncRepeat'
import circleCI from 'common/circleCI'
import { socket } from '../'

const getLastThreeBranches = branches => {
  return _.chain(branches)
    .map((branch, name) => ({ ...branch, name: name }))
    .sortBy(branch => {
      const recentBuilds = branch.recent_builds
      return recentBuilds ? moment(recentBuilds[0].pushed_at).format('YYYYMMDDHHmmss') : 0
    })
    .reverse()
    .slice(0, 3)
    .value()
}

const formatBranches = branches => {
  const lastThreeBranches = getLastThreeBranches(branches)

  return _.chain(lastThreeBranches)
    .map(branch => {
      const latestBuild = branch.recent_builds[0]
      return { name: branch.name, latestBuild: { time: latestBuild.pushed_at, buildNumber: latestBuild.build_num, status: latestBuild.status } }
    })
    .value()
}

const formatProjects = projects => {
  return _.map(projects, project => {
    return { name: project.reponame, branches: formatBranches(project.branches) }
  })
}

export default () => {
  asyncRepeat(async () => {
    const projects = await circleCI.getProjects()
    const formattedProjects = formatProjects(projects)

    socket().emit('projects', { projects: formattedProjects })
  }, 10000)
}
