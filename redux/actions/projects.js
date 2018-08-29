import socket from 'common/socket'

const updateProjects = projects => ({ type: 'projects/UPDATE_PROJECTS', payload: projects })

export const syncProjects = () => dispatch => {
  socket().on('projects', projects => dispatch(updateProjects(projects)))
}
