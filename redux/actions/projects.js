import socket from 'common/socket'

const updateProjects = projects => dispatch => {
  dispatch({ type: 'projects/UPDATE_PROJECTS', payload: projects })
}

export const projectsListener = () => dispatch => {
  socket().on('projects', projects => dispatch(updateProjects(projects)))
}

export const updateProjectQuery = projectQuery => dispatch => {
  dispatch({ type: 'projects/UPDATE_PROJECT_QUERY', payload: projectQuery })
}
