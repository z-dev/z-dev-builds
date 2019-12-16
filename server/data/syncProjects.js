import _ from 'lodash'
import moment from 'moment'
import { asyncPoll } from 'common/utilities/polling'
import circleCI from 'common/circleCI'

const sortableTimeFormat = 'YYYYMMDDHHmmss'
const gitUrl = 'https://github.com/z-dev'

let syncedProjects

const getRecentlyBuiltBranches = branches => {
  return _.chain(branches)
    .map((branch, name) => ({ ...branch, name: name }))
    .sortBy(branch => {
      const latestBuild = _.first(branch.recent_builds)
      return latestBuild ? moment(latestBuild.pushed_at).format(sortableTimeFormat) : 0
    })
    .reverse()
    .take(3)
    .value()
}

const formatBranches = branches => {
  const recentlyBuiltBranches = getRecentlyBuiltBranches(branches)

  return _.chain(recentlyBuiltBranches)
    .map(branch => {
      console.log(branch)
      const latestBuild = _.get(branch, 'recent_builds[0]')
      if (!latestBuild) {
        return null
      }
      return { name: branch.name, latestBuild: { time: latestBuild.pushed_at, status: latestBuild.status } }
    })
    .compact()
    .value()
}

const sortProjects = projects => {
  return _.chain(projects)
    .sortBy(project => {
      const latestBuildTime = _.get(project, 'branches[0].latestBuild.time')
      return latestBuildTime ? moment(latestBuildTime).format(sortableTimeFormat) : 0
    })
    .reverse()
    .value()
}

const formatProjects = projects => {
  return _.map(projects, project => {
    return { name: project.reponame, branches: formatBranches(project.branches) }
  })
}

export const getProjects = async () => {
  const projects = await circleCI.getProjects()
  const zdevProjects = _.filter(projects, project => _.includes(project.vcs_url, gitUrl))
  const formattedProjects = formatProjects(zdevProjects)
  const sortedProjects = sortProjects(formattedProjects)

  syncedProjects = sortedProjects
}

export const syncProjects = () => asyncPoll(getProjects, 10000)

export const projects = () => syncedProjects
