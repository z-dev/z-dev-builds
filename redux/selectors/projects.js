import _ from 'lodash'
import { matches } from 'common/utilities/strings'
import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const FAILED_STATUS = 'failed'

const filterProjectsByStatus = (projects, status) => {
  return _.filter(projects, project => {
    return _.some(project.branches, branch => branch.latestBuild.status === status)
  })
}

const formatTime = time => {
  const timeText = moment(time).calendar(null, {
    sameDay: '[today at] HH:mm',
    lastDay: '[yesterday at] HH:mm',
    lastWeek: '[last] dddd',
    sameElse: 'DD/MM/YYYY',
  })

  return _.toLower(timeText)
}
const formatBranches = branches => {
  return _.map(branches, branch => ({
    ...branch,
    latestBuild: {
      ...branch.latestBuild,
      time: formatTime(branch.latestBuild.time),
      failed: branch.latestBuild.status === 'failed',
    },
  }))
}

const formatProjects = projects => {
  return _.map(projects, project => ({ ...project, branches: formatBranches(project.branches) }))
}

export default createSelector(
  'projects',
  state => state.projects,
  state => state.filters,
  (projectsState, filtersState) => {
    // We would normally do this server side, but this allows us to give a nice selector example
    const formattedProjects = formatProjects(projectsState.projects)
    const projectsFilteredByQuery = _.filter(formattedProjects, project => matches(filtersState.projectQuery, project.name))

    return {
      ...projectsState,
      projects: filtersState.showFailed ? filterProjectsByStatus(projectsFilteredByQuery, FAILED_STATUS) : projectsFilteredByQuery,
    }
  },
)
