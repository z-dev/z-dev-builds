import _ from 'lodash'
import { createSelector } from 'reselect-change-memoize'
import moment from 'moment'

const FAILED_STATUS = 'failed'

const filterProjectsByQuery = (projects, projectQuery) => {
  const lowerCaseProjectQuery = _.toLower(projectQuery)

  return _.filter(projects, project => {
    const lowerCaseProjectName = _.toLower(project.name)
    return _.includes(lowerCaseProjectName, lowerCaseProjectQuery)
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

const formatBranch = branch => ({
  ...branch,
  latestBuild: { ...branch.latestBuild, time: moment(branch.latestBuild.time).format('HH:mm (DD/MM)'), failed: branch.latestBuild.status === 'failed' },
})

const formatProjects = projects => {
  return _.map(projects, project => ({ ...project, branches: _.map(project.branches, branch => formatBranch(branch)) }))
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
