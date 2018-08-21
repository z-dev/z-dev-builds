import _ from 'lodash'
import { createSelector } from 'reselect-change-memoize'

const filterProjectsByQuery = (projects, projectQuery) => {
  const lowerCaseProjectQuery = _.toLower(projectQuery)

  return _.filter(projects, project => {
    const lowerCaseProjectName = _.toLower(project.name)
    return _.includes(lowerCaseProjectName, lowerCaseProjectQuery)
  })
}

const filterProjectsByShowFailed = projects => {
  return _.filter(projects, project => {
    return !_.chain(project.branches)
      .filter(branch => branch.latestBuild.status === 'failed')
      .isEmpty()
      .value()
  })
}

export default createSelector(
  'projects',
  state => state.projects,
  state => state.filters,
  (projectsState, filtersState) => {
    // We would normally do this server side, but this allows us to give a nice selector example
    const projectsFilteredByQuery = filterProjectsByQuery(projectsState.projects, filtersState.projectQuery)
    const projectsFilteredByShowFailed = filterProjectsByShowFailed(projectsFilteredByQuery)

    return {
      ...projectsState,
      projects: filtersState.showFailed ? projectsFilteredByShowFailed : projectsFilteredByQuery,
    }
  },
)
