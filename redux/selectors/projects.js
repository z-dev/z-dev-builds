import _ from 'lodash'
import { createSelector } from 'reselect-change-memoize'

export default createSelector(
  'projects',
  state => state.projects,
  projectsState => {
    const lowerCaseProjectQuery = _.toLower(projectsState.projectQuery)

    const filteredProjects = _.filter(projectsState.projects, project => {
      const lowerCaseProjectName = _.toLower(project.name)
      return _.includes(lowerCaseProjectName, lowerCaseProjectQuery)
    })

    return {
      ...projectsState,
      projects: filteredProjects,
    }
  },
)
