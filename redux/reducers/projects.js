const initialState = {
  projects: null,
  projectsLoading: true,
}

export default function projects(state = initialState, action) {
  switch (action.type) {
    case 'projects/UPDATE_PROJECTS':
      return { ...state, projects: action.payload.projects, projectsLoading: false }
    default:
      return state
  }
}
