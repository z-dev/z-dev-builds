export const updateShowFailed = showFailed => dispatch => {
  dispatch({ type: 'filters/UPDATE_SHOW_FAILED', payload: showFailed })
}

export const updateProjectQuery = projectQuery => dispatch => {
  dispatch({ type: 'filters/UPDATE_PROJECT_QUERY', payload: projectQuery })
}
