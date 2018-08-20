import _ from 'lodash'
import moment from 'moment'
import { asyncRepeat } from 'common/utilities/asyncRepeat'
import circleCI from 'common/circleCI'
import { socket } from '../'

const sortableTimeFormat = 'YYYYMMDDHHmmss'

const getRecentlyBuiltBranches = branches => {
  return _.chain(branches)
    .map((branch, name) => ({ ...branch, name: name }))
    .sortBy(branch => {
      const latestBuild = _.first(branch.recent_builds)
      return latestBuild ? moment(latestBuild.pushed_at).format(sortableTimeFormat) : 0
    })
    .reverse()
    .slice(0, 3)
    .value()
}

const formatBranches = branches => {
  const recentlyBuiltBranches = getRecentlyBuiltBranches(branches)

  return _.chain(recentlyBuiltBranches)
    .map(branch => {
      const latestBuild = branch.recent_builds[0]
      return { name: branch.name, latestBuild: { time: latestBuild.pushed_at, buildNumber: latestBuild.build_num, status: latestBuild.status } }
    })
    .value()
}

const sortProjects = projects => {
  return _.chain(projects)
    .sortBy(project => moment(_.get(project, 'branches[0].latestBuild.time')).format(sortableTimeFormat))
    .reverse()
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
    const sortedProjects = sortProjects(formattedProjects)

    socket().emit('projects', { projects: sortedProjects })
  }, 10000)
}
