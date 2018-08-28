import _ from 'lodash'
import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const FAILED_STATUS = 'failed'

const filterProjectsByQuery = (projects, projectQuery) => {
  const lowerCaseProjectQuery = _.toLower(projectQuery)
  const whitespaceSeperatedQuery = _.split(lowerCaseProjectQuery, ' ')

  return _.filter(projects, project => {
    const lowerCaseProjectName = _.toLower(project.name)

    return _.chain(whitespaceSeperatedQuery)
      .map(query => _.includes(lowerCaseProjectName, query))
      .every()
      .value()
  })
}

const filterProjectsByStatus = (projects, status) => {
  return _.filter(projects, project => {
    return !_.chain(project.branches)
      .filter(branch => branch.latestBuild.status === status)
      .isEmpty()
      .value()
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
    const projectsFilteredByQuery = filterProjectsByQuery(formattedProjects, filtersState.projectQuery)

    return {
      ...projectsState,
      projects: filtersState.showFailed ? filterProjectsByStatus(projectsFilteredByQuery, FAILED_STATUS) : projectsFilteredByQuery,
    }
  },
)
