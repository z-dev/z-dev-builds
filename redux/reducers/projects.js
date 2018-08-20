const initialState = {
  projects: null,
  projectQuery: '',
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case 'projects/UPDATE_PROJECTS':
      return { ...state, projects: action.payload.projects }
    case 'projects/UPDATE_PROJECT_QUERY':
      return { ...state, projectQuery: action.payload }
    default:
      return state
  }
}
